import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import BlogArticle from '@/components/BlogArticle';
import { allArticles } from '@/data/articles';

// استخدام المقالات من الملف المشترك
const articles = allArticles;

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return {
      title: 'المقال غير موجود - أحمد نور للإيبوكسي',
    };
  }

  return {
    title: `${article.title} - مدونة أحمد نور للإيبوكسي`,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      type: 'article',
      publishedTime: article.publishDate,
      authors: [article.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <BlogArticle article={article} />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

// تحديد الصفحات المتاحة للتوليد المسبق
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}
