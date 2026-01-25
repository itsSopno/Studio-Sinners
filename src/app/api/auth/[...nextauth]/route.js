import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Mock authentication (replace with DB check in production)
        if (
          credentials?.email === "admin@creative.com" &&
          credentials?.password === "password123"
        ) {
          return {
            id: "1",
            name: "Admin User",
            email: "admin@creative.com",
            role: "admin"
          };
        }
        return null;
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  pages: {
    signIn: "/login",
    error: "/login",
    newUser: "/items" // Redirect new users to items page
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.role = user.role || "user";
        token.provider = account?.provider;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      session.user.provider = token.provider;
      return session;
    },
    async redirect({ url, baseUrl }) {
      console.log("Redirect callback:", { url, baseUrl });
      
      // Handle different redirect scenarios
      if (url === baseUrl) return `${baseUrl}/items`;
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      if (new URL(url).origin === baseUrl) return url;
      
      // Default redirect to items page
      return `${baseUrl}/items`;
    },
    async signIn({ user, account, profile }) {
      console.log("SignIn callback:", { user, account, profile });
      
      // Allow all sign-ins
      return true;
    }
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development"
});

export { handler as GET, handler as POST };

