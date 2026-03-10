export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdzgreg";

export async function submitToFormspree(payload: Record<string, unknown>) {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      result?.errors?.[0]?.message ??
      "Submission failed. Please try again in a moment.";
    throw new Error(message);
  }

  return result;
}
