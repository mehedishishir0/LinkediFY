import { currentUser } from "@clerk/nextjs/server";
import Feed from "@/components/Feed";
import News from "@/components/News";
import SIdebar from "@/components/SIdebar";

type Verification = {
  status: "verified" | "unverified" | "pending";
  strategy: string;
  externalVerificationRedirectURL: string | null;
  attempts: number | null;
  expireAt: number | null;
  nonce: string | null;
  message: string | null;
};

export type ExternalAccount = {
  id: string;
  provider: string;
  identificationId: string;
  externalId: string;
  approvedScopes: string;
  emailAddress: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  username: string;
  phoneNumber: string | null;
  publicMetadata: Record<string, unknown>;
  label: string | null;
  verification: Verification;
};


export default async function Home() {
  const user = await currentUser();
  const externalAccount = user?.externalAccounts?.[0] as ExternalAccount | undefined;

  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto flex justify-between gap-8">
        {externalAccount ? (
          <SIdebar user={externalAccount} />
        ) : null}
        {externalAccount ? (
          <Feed user={externalAccount} />
        ) : null}
        <News />
      </div>
    </div>
  );
}
