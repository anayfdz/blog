// lib/api.js

const API_URL = process.env.STRAPI_API_URL || 'http://localhost:1337';

export async function fetchPosts() {
  const res = await fetch(`${API_URL}/posts`);
  const data = await res.json();
  return data;
}

export async function fetchPostBySlug(slug) {
  const res = await fetch(`${API_URL}/posts?slug=${slug}`);
  const data = await res.json();
  return data[0]; // Devolver la primera publicación que coincida
}

export async function fetchTags() {
  const res = await fetch(`${API_URL}/tags`);
  const data = await res.json();
  return data;
}

export async function fetchPostsByTag(tag) {
  const res = await fetch(`${API_URL}/tags/${tag}/posts`);
  const data = await res.json();
  return data;
}
