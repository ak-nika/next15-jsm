import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Add user ID to the token when first logging in
        token.id = user.id;
      }

      return token;
    },
    async session({ session, token }) {
      // Attach user ID from token to the session
      session.user.id = token.id as string;
      return session;
    },
  },
});
