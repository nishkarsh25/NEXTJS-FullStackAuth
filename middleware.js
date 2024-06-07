import { NextResponse } from 'next/server'


export function middleware(request) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail'

  const token = request.cookies.get('token')?.value || ''

  if (isPublicPath && token) {
    console.log(token)
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }

  
}


