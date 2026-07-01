import { useEffect } from 'react';

export default function useSEO({ title, description, keywords }) {
  useEffect(() => {
    // 1. Set Title
    document.title = title || 'ElEman Herbs & Spices | الايمان للاستيراد والتصدير والنباتات الطبية';

    // 2. Set Description
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.setAttribute('name', 'description');
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute(
      'content',
      description || 'ElEman Herbs & Spices is a leading exporter of premium organic and conventional herbs, spices, and seeds from Egypt to the world. شركة الايمان للاستيراد والتصدير والنباتات الطبية والعطرية.'
    );

    // 3. Set Keywords
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    const defaultKeywords = 'الايمان هيربس, نباتات الايمان, الايمان للاستيراد والتصدير, الايمان للنباتات الطبيه, elemainherbs, eleman, eleman herbs, el eman, herbs and spices egypt, organic herbs egypt';
    keywordsMeta.setAttribute('content', keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords);

    // 4. Set Open Graph (OG) tags for social media previews
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
  }, [title, description, keywords]);
}
