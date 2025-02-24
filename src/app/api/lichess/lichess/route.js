export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const fen = searchParams.get('fen');
    const ratings = searchParams.get('ratings');
    
    const response = await fetch(`https://explorer.lichess.ovh/lichess?fen=${fen}&ratings=${ratings}`);
    const data = await response.json();
    
    return Response.json(data);
}