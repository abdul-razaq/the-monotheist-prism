"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Shared animation variants for stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

// Section wrapper: scroll-triggered, once, with margin
function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

// Section with staggered paragraphs
function StaggerSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {children}
    </motion.section>
  );
}

export default function AboutContent() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Opening invocation - no emoji, natural flow */}
      <AnimatedSection className="mb-16 text-center">
        <blockquote
          className="font-heading text-xl font-semibold leading-relaxed text-[#D4AF37] sm:text-2xl"
          aria-label="Opening invocation"
        >
          In the name of The Absolute One, The Most Gracious, The Most Merciful
        </blockquote>
      </AnimatedSection>

      {/* You Feel It Too, Don't You? */}
      <StaggerSection className="mb-16">
        <motion.h1
          className="font-heading mb-6 text-3xl font-bold text-white sm:text-4xl"
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          You Feel It Too, Don&apos;t You?
        </motion.h1>
        <motion.p className="text-gray-300 leading-relaxed" variants={itemVariants}>
          That sense that nothing quite adds up anymore.
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          You open your news feed. Scroll. Click. Read.
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          Palestine. Ukraine. Economic crashes. Political wars. Identity battles. Endless arguments about what&apos;s true, what&apos;s right, what even matters.
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          And everyone, <em>everyone</em>, has an answer. A narrative. A side.
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          But here&apos;s the thing: <strong>nobody agrees.</strong>
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          Not just on the solutions. On the <strong>basic questions</strong> themselves.
        </motion.p>

        <motion.div className="mt-8 space-y-4" variants={itemVariants}>
          <p className="text-gray-300 leading-relaxed">
            One voice says your nationality defines you. You&apos;re Polish, Ghanian, British, American, Saudi, Pakistani. Borders matter. Flags matter. Loyalty to the state is virtue.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Another voice says no, it&apos;s your race. Your ethnicity. Your tribe. Your ancestors. &quot;Know your roots.&quot; &quot;Celebrate your heritage.&quot; Blood matters more than belief.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Economics splits into capitalism versus socialism. Free markets versus regulation. Individual freedom versus collective welfare. Pick a team. Argue forever.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Morality? Oh, morality&apos;s gone completely subjective. &quot;Your truth.&quot; &quot;My truth.&quot; &quot;Live and let live.&quot; Right and wrong are just... personal preferences now, apparently.
          </p>
          <p className="text-gray-300 leading-relaxed">
            And religion? Religion itself has fractured into thousands of denominations, sects, schools of thought. Everyone claims to have <strong>the truth</strong>. No one can agree on what it actually is.
          </p>
        </motion.div>

        <motion.div className="mt-8 space-y-4" variants={itemVariants}>
          <p className="text-gray-300 leading-relaxed">
            <strong>So you&apos;re stuck in this weird place:</strong>
          </p>
          <p className="text-gray-300 leading-relaxed">
            Wanting answers. Craving coherence. Needing something that actually <strong>holds together</strong> under scrutiny.
          </p>
          <p className="text-gray-300 leading-relaxed">
            But everywhere you look, it&apos;s just... <strong>noise</strong>.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Competing narratives. Contradictory worldviews. A thousand colored fragments, each one screaming for your attention.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Red. Orange. Yellow. Green. Blue. Violet.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <strong>Scattered. Exhausting. Confusing.</strong>
          </p>
        </motion.div>

        <motion.div className="mt-8 space-y-4" variants={itemVariants}>
          <p className="text-gray-300 leading-relaxed">
            And the worst part?
          </p>
          <p className="text-gray-300 leading-relaxed">
            You can&apos;t just pick one fragment and call it done.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Because the moment you commit to nationalism, you run into the moral problem. The moment you commit to capitalism, you hit the inequality wall. The moment you commit to relativism, you lose any grounds to condemn injustice.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <strong>Nothing quite works.</strong>
          </p>
          <p className="text-gray-300 leading-relaxed">
            So you&apos;re left with this nagging question:
          </p>
          <p className="text-gray-300 leading-relaxed italic">
            Is there actually a framework, a lens, through which all of this makes sense?
          </p>
          <p className="text-gray-300 leading-relaxed italic">
            Something that doesn&apos;t just pick one colored ray and ignore the rest, but actually <strong>unifies</strong> them into something coherent?
          </p>
        </motion.div>

        <motion.div className="mt-8 space-y-4" variants={itemVariants}>
          <p className="text-gray-300 leading-relaxed">
            We think there is.
          </p>
          <p className="text-gray-300 leading-relaxed">
            And that&apos;s what this whole thing is about.
          </p>
        </motion.div>
      </StaggerSection>

      {/* What Is The Monotheist Prism? */}
      <StaggerSection className="mb-16">
        <motion.h2
          className="font-heading mb-6 text-2xl font-bold text-white sm:text-3xl"
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          What Is The Monotheist Prism?
        </motion.h2>
        <motion.p className="text-gray-300 leading-relaxed" variants={itemVariants}>
          Okay, so imagine a prism for a second.
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          You know how it works, right? White light hits the prism, splits into a rainbow. <strong>One becomes many.</strong> Unity fragments into scattered colors.
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          That&apos;s kind of what happened to truth in our world. What might have once been unified has been <strong>shattered</strong> into a thousand competing ideologies, identities, moral systems.
        </motion.p>
        <motion.div className="mt-8 space-y-4" variants={itemVariants}>
          <p className="text-gray-300 leading-relaxed">
            <strong>But here&apos;s where we flip the script.</strong>
          </p>
          <p className="text-gray-300 leading-relaxed">
            What if you could reverse that process?
          </p>
          <p className="text-gray-300 leading-relaxed">
            What if you took all those scattered, contradictory perspectives, politics, economics, identity, morality, purpose, and passed them through a different kind of prism?
          </p>
          <p className="text-gray-300 leading-relaxed">
            Not one that fragments. But one that <strong>converges.</strong>
          </p>
          <p className="text-gray-300 leading-relaxed">
            <strong>That&apos;s what we&apos;re doing here.</strong>
          </p>
          <p className="text-gray-300 leading-relaxed">
            We&apos;re taking the rainbow of modern confusion and showing how it all comes together when you view it through one specific principle:
          </p>
          <p className="text-gray-300 leading-relaxed">
            <strong>Absolute monotheism.</strong>
          </p>
        </motion.div>

        <motion.h3
          className="font-heading mt-10 mb-4 text-xl font-bold text-[#D4AF37]"
          variants={itemVariants}
        >
          Wait, what does &quot;absolute monotheism&quot; even mean?
        </motion.h3>
        <motion.p className="text-gray-300 leading-relaxed" variants={itemVariants}>
          Good question. Let&apos;s be clear about this.
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          We&apos;re <strong>not</strong> talking about &quot;one God in three persons&quot; (that&apos;s... math that doesn&apos;t math), &quot;one God plus saints you pray to for help&quot; (that&apos;s adding partners), &quot;one God who became a man&quot; (that&apos;s mixing the Creator with creation), or &quot;one God, but morality is still subjective&quot; (that&apos;s defeating the whole point).
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          When we say <strong>absolute</strong>, we mean <strong>absolute.</strong>
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          <strong>One.</strong> <strong>Indivisible.</strong> <strong>Independent.</strong> <strong>Unchanging.</strong> <strong>Needing nothing.</strong> <strong>Upon whom all depend.</strong>
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          No partnership. No division. No intermediaries. No exceptions.
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          <strong>The Absolute One.</strong>
        </motion.p>
        <motion.div className="mt-8 space-y-4" variants={itemVariants}>
          <p className="text-gray-300 leading-relaxed">
            And here&apos;s what&apos;s wild:
          </p>
          <p className="text-gray-300 leading-relaxed">
            When you actually take this seriously, when you view the world through the lens of <strong>absolute Divine Oneness</strong>, everything starts to click.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Politics? Not separate from your relationship with The Absolute One. Either you&apos;re submitting to His will, or you&apos;re setting up competing authorities.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Economics? Not neutral. Either the system acknowledges Him as the ultimate owner of all things, or it&apos;s built on a lie.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Identity? Not rooted in your passport or your skin color. Rooted in <strong>whose you are</strong>, a creation of The Absolute One.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Morality? Not subjective. Not democratic. Defined by <strong>The One who created you</strong> and knows what&apos;s best for you.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Purpose? Crystal clear. You exist to recognize, submit to, and worship <strong>The Absolute One</strong>.
          </p>
        </motion.div>
        <motion.div className="mt-8 space-y-4" variants={itemVariants}>
          <p className="text-gray-300 leading-relaxed">
            <strong>See what just happened?</strong>
          </p>
          <p className="text-gray-300 leading-relaxed">
            All those scattered perspectives, the ones pulling you in different directions? <strong>They converged.</strong>
          </p>
          <p className="text-gray-300 leading-relaxed">
            Because they&apos;re not actually separate issues. They&apos;re all manifestations of <strong>one fundamental question:</strong>
          </p>
          <p className="text-gray-300 leading-relaxed italic">
            Are you submitting to The Absolute One, or are you fragmenting reality by setting up rivals, partners, or personal preferences in competition with Divine authority?
          </p>
          <p className="text-gray-300 leading-relaxed">
            That&apos;s the prism.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <strong>Many scattered colors, one unified truth.</strong>
          </p>
        </motion.div>
      </StaggerSection>

      {/* Why This Actually Matters */}
      <StaggerSection className="mb-16">
        <motion.h2
          className="font-heading mb-6 text-2xl font-bold text-white sm:text-3xl"
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Why This Actually Matters
        </motion.h2>
        <motion.p className="text-gray-300 leading-relaxed" variants={itemVariants}>
          Because fragmentation is killing us.
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          The modern world desperately wants you to believe that politics is separate from faith, economics is separate from morality, your identity is separate from your purpose, and everyone&apos;s truth is equally valid.
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          <strong>But that&apos;s a lie.</strong>
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          And deep down, you know it&apos;s a lie. Because <strong>nothing holds together</strong> when you fragment it like that.
        </motion.p>
        <motion.div className="mt-8 space-y-4" variants={itemVariants}>
          <p className="text-gray-300 leading-relaxed">
            If there really is <strong>an Absolute Creator</strong>, singular, independent, all-knowing, then there&apos;s <strong>one objective morality</strong> (what He defines as right and wrong), there&apos;s <strong>one legitimate ultimate authority</strong> (His alone), there&apos;s <strong>one true purpose</strong> (recognizing and submitting to Him), and there&apos;s <strong>one unified humanity</strong> (we&apos;re all His creation, regardless of borders or bloodlines).
          </p>
          <p className="text-gray-300 leading-relaxed">
            <strong>Everything converges</strong> under this principle.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Politics stops being &quot;my nation versus yours&quot; and becomes &quot;are we aligning with Divine will or not?&quot;
          </p>
          <p className="text-gray-300 leading-relaxed">
            Identity stops being &quot;I&apos;m British, Polish, Danish, Sudanese, American, Arab&quot; and becomes &quot;I&apos;m a servant of The Absolute One, and so is everyone else willing to submit.&quot;
          </p>
          <p className="text-gray-300 leading-relaxed">
            Morality stops being &quot;whatever feels right to me&quot; and becomes &quot;what does The One who created us say is right?&quot;
          </p>
        </motion.div>
        <motion.p className="mt-8 text-gray-300 leading-relaxed" variants={itemVariants}>
          This isn&apos;t just philosophy.
        </motion.p>
        <motion.p className="mt-2 text-gray-300 leading-relaxed" variants={itemVariants}>
          This is <strong>how reality actually works</strong> when you stop pretending you can split it into fragments and still have it make sense.
        </motion.p>
      </StaggerSection>

      {/* The Discovery Path */}
      <StaggerSection className="mb-16">
        <motion.h2
          className="font-heading mb-6 text-2xl font-bold text-white sm:text-3xl"
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          The Discovery Path
        </motion.h2>
        <motion.p className="text-gray-300 leading-relaxed" variants={itemVariants}>
          You might notice something: we keep saying <strong>&quot;absolute monotheism&quot;</strong> way more than we reference any specific religion.
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          That&apos;s on purpose.
        </motion.p>
        <motion.div className="mt-8 space-y-4" variants={itemVariants}>
          <p className="text-gray-300 leading-relaxed">
            Here&apos;s the thing. <strong>Labels create walls before people even think.</strong>
          </p>
          <p className="text-gray-300 leading-relaxed">
            If we opened with &quot;This is a platform teaching monotheism from a specific religious tradition,&quot; a bunch of you would&apos;ve already clicked away.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Some would think &quot;Oh, this isn&apos;t for me.&quot; Others would think &quot;Not interested in religion.&quot; Even some believers would think &quot;Great, another preachy channel.&quot;
          </p>
          <p className="text-gray-300 leading-relaxed">
            And you&apos;d all leave <strong>before encountering the actual ideas.</strong>
          </p>
        </motion.div>
        <motion.div className="mt-8 space-y-4" variants={itemVariants}>
          <p className="text-gray-300 leading-relaxed">
            So instead, we start with <strong>questions</strong>:
          </p>
          <p className="text-gray-300 leading-relaxed">
            Does the idea of &quot;three persons in one God&quot; actually pass the test of <strong>absolute oneness</strong>? Or is that kind of a contradiction?
          </p>
          <p className="text-gray-300 leading-relaxed">
            Can you genuinely believe in <strong>one Creator of all humanity</strong> while pledging ultimate loyalty to a nation-state? Or does nationalism inherently divide what The Absolute One unified?
          </p>
          <p className="text-gray-300 leading-relaxed">
            If you believe The Absolute One is <strong>all-knowing and all-powerful</strong>, does it make sense to ask intermediaries to &quot;intercede&quot; on your behalf? Or does that imply He needs help?
          </p>
          <p className="text-gray-300 leading-relaxed">
            If <strong>absolute truth exists</strong>, can morality really be subjective? Or does moral relativism collapse under its own weight?
          </p>
        </motion.div>
        <motion.div className="mt-8 space-y-4" variants={itemVariants}>
          <p className="text-gray-300 leading-relaxed">
            And when you follow those questions honestly, using <strong>reason and evidence</strong>, you start arriving at conclusions.
          </p>
          <p className="text-gray-300 leading-relaxed">
            You realize absolute oneness rules out partnership in any form, submission to The Absolute One rules out nationalism as ultimate identity, direct access to The Creator rules out intermediary worship, and objective morality flows from an Absolute Moral Authority.
          </p>
          <p className="text-gray-300 leading-relaxed">
            And at some point in that journey, you&apos;ll discover something interesting: <strong>there&apos;s a word for all of this.</strong> There&apos;s a historical tradition that preserved these ideas in their purest form. There were people throughout history who taught <strong>exactly this</strong>, absolute Divine Oneness, no partners, no division, submission to The One alone.
          </p>
          <p className="text-gray-300 leading-relaxed">
            And yes, you&apos;ll eventually discover what it&apos;s called and which tradition preserved it most clearly.
          </p>
        </motion.div>
        <motion.div className="mt-8 space-y-4" variants={itemVariants}>
          <p className="text-gray-300 leading-relaxed">
            <strong>But here&apos;s the key:</strong>
          </p>
          <p className="text-gray-300 leading-relaxed">
            You won&apos;t arrive there because we <strong>told you</strong> &quot;This is the truth, accept it.&quot; You&apos;ll arrive there because you <strong>followed the evidence</strong> and realized, &quot;Oh. This makes sense. And apparently, this is what those people were teaching all along.&quot;
          </p>
          <p className="text-gray-300 leading-relaxed">
            That&apos;s the journey. <strong>Questions first. Evidence second. Conclusions third. Labels last.</strong>
          </p>
          <p className="text-gray-300 leading-relaxed">
            We&apos;re not hiding anything. We&apos;re just letting you <strong>discover it</strong> the way any honest seeker would, through thinking, not through being sold a prepackaged worldview.
          </p>
        </motion.div>
      </StaggerSection>

      {/* What We Actually Do */}
      <StaggerSection className="mb-16">
        <motion.h2
          className="font-heading mb-6 text-2xl font-bold text-white sm:text-3xl"
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          What We Actually Do
        </motion.h2>
        <motion.p className="text-gray-300 leading-relaxed" variants={itemVariants}>
          We create content that takes the chaos of modern life and passes it through the lens of absolute monotheism.
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          Here&apos;s what that looks like:
        </motion.p>

        <motion.h3 className="font-heading mt-10 mb-4 text-xl font-bold text-[#D4AF37]" variants={itemVariants}>
          Videos
        </motion.h3>
        <motion.p className="text-gray-300 leading-relaxed" variants={itemVariants}>
          Text-driven. Cinematic. No faces. No voices.
        </motion.p>
        <motion.p className="mt-2 text-gray-300 leading-relaxed" variants={itemVariants}>
          Just ideas, evidence, questions, and visuals.
        </motion.p>
        <motion.p className="mt-2 text-gray-300 leading-relaxed" variants={itemVariants}>
          We don&apos;t show you who we are because <strong>this isn&apos;t about us.</strong> It&apos;s about whether the ideas hold up under scrutiny.
        </motion.p>
        <motion.p className="mt-2 text-gray-300 leading-relaxed" variants={itemVariants}>
          Each video takes something current, an event, a trend, a controversy, and asks, &quot;What does this look like when viewed through the lens of absolute monotheism?&quot;
        </motion.p>
        <motion.p className="mt-2 text-gray-300 leading-relaxed" variants={itemVariants}>
          Sometimes the answer is clarifying. Sometimes it&apos;s uncomfortable. Always, it&apos;s honest.
        </motion.p>

        <motion.h3 className="font-heading mt-10 mb-4 text-xl font-bold text-[#D4AF37]" variants={itemVariants}>
          Articles
        </motion.h3>
        <motion.p className="text-gray-300 leading-relaxed" variants={itemVariants}>
          Longer-form written analysis.
        </motion.p>
        <motion.p className="mt-2 text-gray-300 leading-relaxed" variants={itemVariants}>
          When a topic needs more depth than a video can provide, we write it out. Evidence-based. Reason-grounded. We don&apos;t just give you our opinion, we <strong>show you why</strong> absolute monotheism demands a certain conclusion, and we let you test it yourself.
        </motion.p>

        <motion.h3 className="font-heading mt-10 mb-4 text-xl font-bold text-[#D4AF37]" variants={itemVariants}>
          Commentary
        </motion.h3>
        <motion.p className="text-gray-300 leading-relaxed" variants={itemVariants}>
          Quick thoughts on trending topics. Short. Sharp. Designed to make you stop scrolling and actually <strong>think</strong> for a second.
        </motion.p>

        <motion.h3 className="font-heading mt-10 mb-4 text-xl font-bold text-[#D4AF37]" variants={itemVariants}>
          Our Method: We Ask, You Decide
        </motion.h3>
        <motion.p className="text-gray-300 leading-relaxed" variants={itemVariants}>
          We&apos;re not here to preach at you.
        </motion.p>
        <motion.p className="mt-2 text-gray-300 leading-relaxed" variants={itemVariants}>
          We use questions that make you examine your own beliefs, test them against evidence, and arrive at your own conclusions. We present the evidence. We ask the hard questions. We lay out the logic. <strong>You decide</strong> if it holds up.
        </motion.p>
        <motion.p className="mt-6 text-gray-300 leading-relaxed" variants={itemVariants}>
          Topics we cover: current events (global issues affecting people who believe in The Absolute One), theology (does partnership with The One make sense in any form?), modern contradictions (why obsess over minor details while ignoring major issues?), identity crises (nationalism versus universal submission to The One), historical examples (how did early believers in absolute monotheism actually live?), and comparative analysis (what happens when you test different worldviews against the standard of absolute Divine Oneness?).
        </motion.p>
      </StaggerSection>

      {/* Who This Is For */}
      <StaggerSection className="mb-16">
        <motion.h2
          className="font-heading mb-6 text-2xl font-bold text-white sm:text-3xl"
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Who This Is For
        </motion.h2>
        <motion.p className="text-gray-300 leading-relaxed" variants={itemVariants}>
          This is for you if you&apos;re tired of fragmented worldviews that don&apos;t actually hold together, you&apos;re willing to question <strong>everything</strong> including your own beliefs, you value <strong>truth</strong> over comfort, you&apos;re intellectually honest enough to follow reasoning wherever it leads, and you&apos;re searching, whether you&apos;re coming from any background or none at all.
        </motion.p>
        <motion.p className="mt-6 text-gray-300 leading-relaxed" variants={itemVariants}>
          This is NOT for you if you just want someone to tell you what to think, you get offended by hard questions about your beliefs, your national or cultural identity is more important to you than truth, you&apos;re looking for feel-good motivation or surface-level content, or you want an echo chamber that confirms what you already believe.
        </motion.p>
        <motion.p className="mt-6 text-gray-300 leading-relaxed" variants={itemVariants}>
          We&apos;re not here to make you comfortable. We&apos;re here to make you <strong>think.</strong>
        </motion.p>
      </StaggerSection>

      {/* What We Don't Do */}
      <StaggerSection className="mb-16">
        <motion.h2
          className="font-heading mb-6 text-2xl font-bold text-white sm:text-3xl"
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          What We Don&apos;t Do
        </motion.h2>
        <motion.p className="text-gray-300 leading-relaxed" variants={itemVariants}>
          Just so we&apos;re clear:
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          We don&apos;t follow authorities blindly. We&apos;re not here to say &quot;Source X said this, so it&apos;s true.&quot; Evidence and reason come first. Always.
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          We don&apos;t avoid uncomfortable topics. Global conflicts, nationalism, theological contradictions, intercession, modern inconsistencies, historical examples. <strong>We go there.</strong>
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          We don&apos;t water things down. Absolute means <strong>absolute.</strong> We&apos;re not going to compromise clarity for palatability.
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          We&apos;re not activists. We&apos;re not telling you to join movements, protest governments, or take to the streets. We&apos;re showing you how <strong>absolute monotheism</strong> should shape the way you <strong>think</strong>. What you do with that clarity is between you and The Absolute One.
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          We&apos;re not building a personality brand. You won&apos;t see our faces. You won&apos;t hear our voices. This isn&apos;t about <strong>us.</strong> It&apos;s about <strong>the ideas.</strong> If the content makes sense, don&apos;t follow us, follow the evidence. If it doesn&apos;t, don&apos;t attack us, critique the arguments.
        </motion.p>
      </StaggerSection>

      {/* Who We Are */}
      <StaggerSection className="mb-16">
        <motion.h2
          className="font-heading mb-6 text-2xl font-bold text-white sm:text-3xl"
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Who We Are
        </motion.h2>
        <motion.p className="text-gray-300 leading-relaxed" variants={itemVariants}>
          We&apos;re <strong>anonymous.</strong> Not because we&apos;re hiding something. But because <strong>this isn&apos;t about us.</strong>
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          We&apos;re just people who looked at the chaos, asked some hard questions, and realized that absolute monotheism <strong>actually works</strong> as a unifying lens. Now we&apos;re sharing that process.
        </motion.p>
        <motion.p className="mt-6 text-gray-300 leading-relaxed" variants={itemVariants}>
          Test everything we say. Seriously. Use <strong>reason.</strong> Use <strong>evidence.</strong> Use <strong>your own intellect.</strong>
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          If what we&apos;re saying holds up, great, benefit from it. If it doesn&apos;t, cool, tell us where the logic breaks down.
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          We&apos;re not asking for blind belief. We&apos;re asking for honest engagement.
        </motion.p>
      </StaggerSection>

      {/* What We're Hoping For */}
      <StaggerSection className="mb-16">
        <motion.h2
          className="font-heading mb-6 text-2xl font-bold text-white sm:text-3xl"
          variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          What We&apos;re Hoping For
        </motion.h2>
        <motion.p className="text-gray-300 leading-relaxed" variants={itemVariants}>
          Look, we&apos;re not trying to reach millions of people. We&apos;re trying to reach <strong>the few</strong> who are exhausted by incoherence, hungry for something that actually makes sense, willing to think deeply, ready to question everything, and honest enough to follow truth even when it&apos;s uncomfortable.
        </motion.p>
        <motion.p className="mt-6 text-gray-300 leading-relaxed" variants={itemVariants}>
          If that&apos;s you, you&apos;re in the right place.
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed font-semibold text-[#D4AF37]" variants={itemVariants}>
          Through The Monotheist Prism, scattered chaos converges into unified clarity.
        </motion.p>
        <motion.p className="mt-4 text-gray-300 leading-relaxed" variants={itemVariants}>
          Let&apos;s see where this goes.
        </motion.p>
        <motion.p className="mt-8 text-gray-400 leading-relaxed" variants={itemVariants}>
          <strong>May The Absolute One guide us all to what is true, and protect us from what is false.</strong>
        </motion.p>
      </StaggerSection>

      {/* Get In Touch */}
      <AnimatedSection className="mb-20">
        <h2 className="font-heading mb-6 text-2xl font-bold text-white sm:text-3xl">
          Get In Touch
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Email: contact@themonotheistprism.com, YouTube: Coming soon, Twitter: @MonotheistPrism, Instagram: @monotheist.prism
        </p>
      </AnimatedSection>
    </article>
  );
}
