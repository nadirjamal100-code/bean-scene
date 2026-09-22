export type NewsletterResult = { ok: boolean; message: string };

/**
 * INTEGRATION POINT — newsletter sign-up.
 *
 * The Figma design only specifies the front-end of the form. Replace the body of this
 * function with a real request (for example a Route Handler at `app/api/subscribe/route.ts`
 * or your email provider's API). The UI only depends on the `{ ok, message }` result.
 */
export async function subscribeToNewsletter(email: string): Promise<NewsletterResult> {
  void email; // remove once the email is sent to a backend
  await new Promise((resolve) => setTimeout(resolve, 400));
  return { ok: true, message: 'Thanks for subscribing!' };
}
