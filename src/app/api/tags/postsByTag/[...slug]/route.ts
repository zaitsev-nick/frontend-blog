import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: Request) {

  let slug = request.url.split('/').pop();

  if(!slug) {
    slug = request.url.split('/').pop();
  }

  const posts = await db.post.findMany({
    where: {
      tags: {
        array_contains: [{'slug': slug}],
      },
    },
  })

  return NextResponse.json(posts);
}

