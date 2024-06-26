import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: Request) {

  let slug = request.url.split('/').pop();

  if(!slug) {
    slug = request.url.split('/').pop();
  }

  const tag = await db.tag.findUnique({
    where: {
      slug: slug
    },
  })

  return NextResponse.json({ tag, ok: true }, { status: 201 });
}

