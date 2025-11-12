import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'config', 'suits-count.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading suits count:', error);
    // Return default value if file read fails
    return NextResponse.json({ availableSuits: 47, lastUpdated: new Date().toISOString().split('T')[0] });
  }
}
