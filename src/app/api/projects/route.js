import { NextResponse } from 'next/server';
import { projects, blogs } from '@/app/api/data';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    if (type === 'projects') {
        return NextResponse.json(projects);
    } else if (type === 'blogs') {
        return NextResponse.json(blogs);
    } else {
        return NextResponse.json({ projects, blogs });
    }
}