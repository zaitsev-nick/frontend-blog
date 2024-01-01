import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: Request) {

  let id = request.url.split('/').pop();

  if(!id) {
    id = request.url.split('/').pop();
  }

  const post = await db.post.findUnique({
    where: {
      id: parseInt(id as string)
    },
  })

  return NextResponse.json({ post, ok: true }, { status: 201 });
}

