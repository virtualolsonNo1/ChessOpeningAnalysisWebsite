export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const fen = searchParams.get('fen');
    
    const response = await fetch(`https://explorer.lichess.ovh/masters?fen=${fen}`);
    const data = await response.json();
    
    return Response.json(data);
  }