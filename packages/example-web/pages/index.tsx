import { H1 } from '@/components/headers';

export default function HomePage() {
  return (
    <>
      <H1 className="prose-strong:text-secondary">
        @sfpy<strong>/</strong>styleguide
      </H1>
      <p className="text-lg mt-8">
        A collection of packages used to share styles and icons across Safepay websites and projects.
      </p>
    </>
  );
}
