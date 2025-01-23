import { NextResponse } from 'next/server';

export async function POST(request) {
    const metric = await request.json();
    // console.log('Received metric:', metric);

    return NextResponse.json({ message: 'Metric received' }, { status: 200 });
}

export async function GET() {
    return new NextResponse('Method Not Allowed', { status: 405 });
}