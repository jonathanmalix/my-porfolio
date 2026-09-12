/**
 * Recipient email for the "Hire Me" contact form.
 *
 * IMPORTANT LIMITATION — please read:
 * This is a static, no-backend site. Any value bundled into the client
 * (env vars included) ships inside the built JavaScript and can be read
 * by inspecting the bundle or the network request the form makes when
 * it submits. Using a Vite env var keeps the address out of component
 * code and easy to change per environment, but it does NOT make it a
 * secret. For true secrecy you'd need a server or serverless function
 * that holds the address and relays the message on your behalf.
 *
 * To change the address, create a `.env` file in the project root
 * (see `.env.example`) with:
 *   VITE_RECIPIENT_EMAIL=you@example.com
 */
export const RECIPIENT_EMAIL =
  import.meta.env.VITE_RECIPIENT_EMAIL;
