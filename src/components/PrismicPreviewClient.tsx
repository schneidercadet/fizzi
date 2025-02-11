'use client';

import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';

export default function PrismicPreviewClient() {
  return <PrismicPreview repositoryName={repositoryName} />;
}
