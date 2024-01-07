import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: Request) {

  const tags = await db.tag.findMany({
    orderBy: {
      id: 'asc',
    }
  });
 
  return NextResponse.json(tags);
}