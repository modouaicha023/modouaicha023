import { NextResponse } from 'next/server';
import data from '../../../../data.json'

export async function GET(request) {
    return NextResponse.json(data);
}