function generateUUID(): string {
  // Generate a random UUID in the RFC4122 version 4 format
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

const predefinedTags = ["car", "man", "woman", "abstract", "work"]

export const DATA = Array.from({ length: 32 }, (_, index) => ({
  id: generateUUID(),
  path: `/assets/${index + 1}.jpg`,
  tag: predefinedTags[index % predefinedTags.length],
}))
