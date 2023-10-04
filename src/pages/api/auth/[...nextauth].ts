import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_CLIENT_ID || '',
      clientSecret: process.env.NEXTAUTH_CLIENT_SECRET || '',
    }),
  ],
  session: {
    maxAge: 2 * 60 * 60, // 2 hours
  },
  callbacks: {
    redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url
      // Allows relative callback URLs
      else if (url.startsWith('/')) return new URL(url, baseUrl).toString()
      return baseUrl
    },
    session: ({ session }) => {
      return session
    },
  },
}

export default NextAuth(authOptions)
