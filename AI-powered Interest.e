https://huggingface.co/model



# Social Media Platform with AI-powered Interest Detection

This document summarizes the project idea, architecture, and workflow for building a social media platform where posts and users are connected via interests. It also explains how to integrate AI for automatic content understanding.

---

## 1. Concept: Bipartite Graph

We use a **Bipartite Graph** to represent the relationships between users and their interests.

- **Definition:** A bipartite graph is a graph whose vertices can be divided into two disjoint sets such that every edge connects a vertex from the first set to a vertex from the second set.
- **Users (Set A)**: Each user is a node in the first set.
- **Interests (Set B)**: Each interest is a node in the second set.
- **Edges**: A connection between a user and an interest indicates the user likes or follows that topic.

**Example:**
```json
[
  { "name": "Gaith", "interests": ["React", "AI"] },
  { "name": "Sara", "interests": ["Fashion", "AI"] },
  { "name": "Ali", "interests": ["Python", "AI"] }
]


