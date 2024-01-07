import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: Request) {

  let slug = request.url.split('/').pop();

  if(!slug) {
    slug = request.url.split('/').pop();
  }

  const post = await db.post.findUnique({
    where: {
      slug: slug
    },
  })

  return NextResponse.json({ post, ok: true }, { status: 201 });
}

