type Props = {
  children: React.ReactNode;
  params: { category: string };
};

export async function generateMetadata({ params }: Props) {
  const categoryName =
    params.category.charAt(0).toUpperCase() + params.category.slice(1);
  return {
    title: `${categoryName} | HackerNews`,
    description: `${categoryName} | HackerNews`,
  };
}

export default function CategoryLayout({ children }: Props) {
  return <>{children}</>;
}
