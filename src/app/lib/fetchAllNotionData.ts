export async function fetchAllNotionData() {
  try {
    const response = await fetch("/api/notion");
    if (!response.ok) {
      throw new Error("Failed to fetch data from Notion API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Notion data:", error);
    throw error;
  }
}
