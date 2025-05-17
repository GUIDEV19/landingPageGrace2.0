import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function trackFacebookLead(eventName: string, buttonText: string) {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_name: buttonText,
      content_category: eventName
    });
  }
}

export async function createTrelloCard(name: string, email: string, phone: string, message: string) {
  const TRELLO_API_KEY =  process.env.TRELLO_API_KEY;
  const TRELLO_TOKEN = process.env.TRELLO_TOKEN;
  const TRELLO_LIST_ID = process.env.TRELLO_LIST_ID;

  if (!TRELLO_API_KEY || !TRELLO_TOKEN || !TRELLO_LIST_ID) {
    console.error('Trello credentials not configured');
    return;
  }

  const cardName = `Novo contato: ${name}`;
  const cardDesc = `
Nome: ${name}
Email: ${email}
Telefone: ${phone}

Mensagem:
${message}
  `.trim();

  try {
    const response = await fetch(`https://api.trello.com/1/cards?key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: cardName,
        desc: cardDesc,
        idList: TRELLO_LIST_ID,
        pos: 'top'
      })
    });

    if (!response.ok) {
      throw new Error('Failed to create Trello card');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating Trello card:', error);
    throw error;
  }
}
