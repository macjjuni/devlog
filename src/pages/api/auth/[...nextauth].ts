import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: '747592602022-0bb58qass3j2v9habl21o1ee8vh66ckk.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
  callbacks: {
    redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url
      // Allows relative callback URLs
      else if (url.startsWith('/')) return new URL(url, baseUrl).toString()
      return baseUrl
    },
  },
})
