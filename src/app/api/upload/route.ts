import { db } from '@/lib/db';
import type { PostType } from '@/types/types'
import { NextResponse } from 'next/server';

// POST /api/upload
export async function POST(req: Request) {
  const body = await req.json();
  try {
    const { 
      title, 
      description,
      text,
      image,
      createdAt,
      categories
    } = body;

    const newPost = await db.post.create({
      data: {
        title,
        description,
        text,
        image,
        createdAt,
        categories,
      }
    });

    return NextResponse.json({ post: newPost, message: 'Post created' }, { status: 201 })
  } catch(error) {
    return NextResponse.json({ message: 'Somethimg went wrong' }, { status: 500 })
  }
}