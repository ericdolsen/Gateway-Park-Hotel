import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { HOTEL_INFO, ROOMS, AMENITIES } from '../constants';

// Initialize the API client
// Note: In a real production app, ensure this is instantiated securely.
// Using generic environment variable access for the demo.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the Virtual Concierge for ${HOTEL_INFO.name}.
Your goal is to assist guests with booking questions, amenity details, and local recommendations.

Key Details:
- Address: ${HOTEL_INFO.address}
- Contact: ${HOTEL_INFO.phone}, ${HOTEL_INFO.email}
- Check-in: ${HOTEL_INFO.checkIn}, Check-out: ${HOTEL_INFO.checkOut}

Rooms Available:
${ROOMS.map(r => `- ${r.name}: Sleeps ${r.capacity}. Features: ${r.amenities.join(', ')}`).join('\n')}

Amenities:
${AMENITIES.map(a => `- ${a.title}: ${a.description}`).join('\n')}

Tone: Professional, warm, welcoming, and concise.
If asked about availability for specific dates, explain that you can't check live inventory yet, but they can click the "Book Now" button to see real-time availability.
`;

let chatSession: Chat | null = null;

export const initChat = () => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async function* (message: string) {
  const session = initChat();
  
  try {
    const result = await session.sendMessageStream({ message });
    
    for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
            yield c.text;
        }
    }
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    yield "I apologize, but I'm having trouble connecting to the concierge service right now. Please try again or call the front desk.";
  }
};