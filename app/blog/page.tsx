"use client";

import Image from "next/image";
import { useState } from "react";
import { jsPDF } from "jspdf";

const blogPosts = [
  {
    img: "/images/blogpage/1.png",
    title: "The Importance of Upskilling in Today's Job Market",
    subtitle: "Why Upskilling Matters in 2025",
  },
  {
    img: "/images/blogpage/2.png",
    title: "How Gamified Learning Enhances Skill Retention",
    subtitle: "The Psychology Behind Gamification",
  },
  {
    img: "/images/blogpage/3.png",
    title: "Soft Skills vs. Hard Skills: What Matters More?",
    subtitle: "The Difference Between Soft and Hard Skills",
  },
];

const dummyArticles: Record<string, string> = {
  "Why Upskilling Matters in 2025": `
In 2025, the professional landscape is rapidly evolving due to advances in technology and shifting market demands. Continuous upskilling has become crucial to stay competitive and relevant. Employees who invest in learning new skills are more likely to achieve job satisfaction, earn better promotions, and adapt to future changes without stress.

Upskilling also benefits employers by yielding a workforce capable of embracing innovation. Companies are actively seeking candidates who show drive for growth and learning.

Key Benefits of Upskilling:
- Increased employability and career security
- Enhanced adaptability in a changing market
- Higher earning potential
- Exposure to new technologies and methodologies

Stay ahead by mastering both technical and soft skills in 2025!
  `,
  "The Psychology Behind Gamification": `
Gamification applies game elements in non-game contexts to boost motivation and engagement. It leverages psychological principles, like reward cycles, social competition, and goal-setting, to tap into people's natural desires for achievement and recognition.

Why Gamification Works:
- Rewards and badges stimulate dopamine release, boosting motivation
- Progress bars and levels encourage sustained effort
- Leaderboards foster healthy competition
- Challenges and milestones give a sense of accomplishment

This approach transforms repetitive tasks, learning modules, or workplace procedures into engaging experiences, resulting in higher productivity and satisfaction.

Try introducing gamification into learning, fitness, or professional settings to see how powerful psychology can be!
  `,
  "The Difference Between Soft and Hard Skills": `
Hard skills are teachable, measurable abilities—like coding, accounting, or hardware repair. They’re acquired through education and practice, and usually defined by certifications or technical tests.

Soft skills are interpersonal attributes: communication, critical thinking, problem solving, teamwork, and leadership. They’re often intrinsic or developed through experience and are vital for collaboration and workplace harmony.

Examples:
- Hard skills: Python programming, financial modeling, driving
- Soft skills: Empathy, flexibility, conflict resolution

Both are essential. Hard skills get a foot in the door, but soft skills pave the way to career advancement.
  `,
};

export default function BlogPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const indicatorClasses = (index: number) =>
    `h-1.5 rounded-full transition-all duration-300 ${
      hoveredIndex === index ? "w-64 bg-[#00418d]" : "w-24 bg-[#c3dfff]"
    }`;

  // Generate and save PDF with dummy article based on title
  const downloadPDF = (title: string) => {
    const doc = new jsPDF();
    const text = dummyArticles[title] || "Article content unavailable.";
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 15;
    const maxLineWidth = pageWidth - margin * 2;

    doc.setFontSize(18);
    doc.setTextColor("#00418d");
    doc.text(title, pageWidth / 2, 20, { align: "center" });

    doc.setFontSize(12);
    doc.setTextColor(20, 20, 20);

    // Split text into lines fitting page width
    const lines = doc.splitTextToSize(text, maxLineWidth);
    doc.text(lines, margin, 30);

    doc.save(`${title.replace(/\s+/g, "_")}.pdf`);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 mt-20"> {/* Added mt-20 to push below navbar */}
            <h2 className="text-3xl font-bold text-center mb-4">
              Mastering Knowledge & Growth
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-8">
              In a world of constant change, continuous learning is the key to success...
            </p>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mb-10" aria-label="Featured blog post indicators">
              {blogPosts.map((_, index) => (
                <div key={index} className={indicatorClasses(index)} />
              ))}
            </div>

            {/* Featured Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex flex-col group cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={post.img}
                      alt={post.title}
                      width={380}
                      height={240}
                      className="w-full h-auto object-cover"
                      priority={index === 0} // prioritize first image for faster load
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{post.title}</h3>
                  <p
                    onClick={() => downloadPDF(post.subtitle)}
                    className="text-sm text-[#00418d] font-medium cursor-pointer hover:underline select-none"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") downloadPDF(post.subtitle);
                    }}
                  >
                    {post.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <SecondaryBlogPost
              src="/images/blogpage/4.png"
              alt="Top 10 Tech Skills"
              title="Top 10 Tech Skills That Can Land You a High-Paying Job"
              description="Why Tech Skills Are Essential in 2025"
            />
            <SecondaryBlogPost
              src="/images/blogpage/5.png"
              alt="Learning motivation"
              title="How to Stay Motivated While Learning New Skills"
              description="Why Motivation Is Key to Skill Development"
            />
          </div>

          {/* Knowledge Articles */}
          <div className="mb-16 max-w-4xl mx-auto px-2">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Mastering Knowledge & Growth
            </h2>
            <p className="mb-12 text-center">
              Knowledge is the foundation of growth. Embrace new ideas, sharpen your skills, and stay inspired with insights that empower you to achieve more in both your personal and professional journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <KnowledgeArticle
                src="/images/blogpage/6.png"
                alt="Online learning"
                smallText="Trends to Watch in 2025"
                title="The Future of Online Learning"
              />
              <KnowledgeArticle
                src="/images/blogpage/7.png"
                alt="Career skills"
                smallText="Trends to Watch in 2025"
                title="5 Essential Skills to Boost Your Career in 2025"
              />
              <KnowledgeArticle
                src="/images/blogpage/8.png"
                alt="Gamification"
                smallText="Trends to Watch in 2025"
                title="How Gamification Enhances Learning & Engagement"
              />
              <KnowledgeArticle
                src="/images/blogpage/1.png"
                alt="Career boost"
                smallText="Trends to Watch in 2025"
                title="5 Essential Skills to Boost Your Career in 2025"
              />
              <KnowledgeArticle
                src="/images/blogpage/4.png"
                alt="Microlearning"
                smallText="Trends to Watch in 2025"
                title="The Power of Microlearning"
              />
              <KnowledgeArticle
                src="/images/blogpage/2.png"
                alt="Learning revolution"
                smallText="Trends to Watch in 2025"
                title="Revolutionizing the Way We Learn"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SecondaryBlogPost({
  src,
  alt,
  title,
  description,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="relative h-60 mb-4 rounded-lg overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={580}
          height={240}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
    </div>
  );
}

function KnowledgeArticle({
  src,
  alt,
  smallText,
  title,
}: {
  src: string;
  alt: string;
  smallText: string;
  title: string;
}) {
  return (
    <div className="flex gap-4 mb-6">
      <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={96}
          height={96}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-1">{smallText}</p>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
    </div>
  );
}
