---
name: humanize-content
description: 'Rewrite a documentation page to sound human and match Neon voice. Use when asked to humanize content, remove AI writing patterns, fix robotic or stiff tone, cut filler and hedging, replace words like utilize or leverage, remove em dashes, or apply contractions, active voice, and direct "you" address to a docs page.'
---

# Humanize content

Transform a documentation page to sound like one human explaining something to another. Two parts: remove AI writing patterns, then apply Neon voice where the text is correct but stiff.

## When to use

- "Humanize this page" / "this sounds like AI, fix it"
- Reviewing drafted content for tone before publishing
- Applying Neon voice (contractions, "you", active voice) to existing docs

## Part 1: Remove AI writing patterns

**Filler and throat-clearing**
- "In this guide/article, you will..." openings: cut or rewrite to lead with content
- "It's worth noting that..." / "It's important to note that...": cut the preamble
- "As mentioned above/earlier...": cut or rewrite without the callback
- Restating a section heading verbatim in its first sentence: rewrite to add content

**Hedging**
- "It is possible that...": state directly or cut
- "In some cases..." / "Generally speaking..." / "For the most part...": be specific or cut
- "It should be noted that...": cut the preamble, lead with the fact

**Over-formal words** (replacement table)

| Replace | With |
| --- | --- |
| utilize | use |
| leverage | use, or be specific |
| facilitate | help, enable, or be specific |
| implement (when vague) | add, set up, write |
| in order to | to |
| due to the fact that | because |
| at this point in time | now |
| on a regular basis | regularly |

- Em dashes: rewrite using a comma, parentheses, or a new sentence. Never introduce a new em dash in a rewrite.

**AI-specific tells**
- "Certainly!" / "Absolutely!" / "Of course!" openings: cut
- Overused "seamlessly", "robust", "straightforward", "powerful", "comprehensive": cut or replace with specifics
- Closing sentences restating the page title ("In this guide, you learned..."): cut
- "In summary..." transitions that only repeat the previous paragraph: cut
- Abbreviations without expansion: spell out on first use, abbreviation in parentheses. Do not introduce abbreviations absent from the original.

**Minimizers**
- "Simply", "just", "easily", "quick" before a step: cut; let the steps speak
- "Easy" or "straightforward" when complexity follows: cut

## Part 2: Apply Neon voice

**Contractions.** Use where natural: "it is" to "it's", "do not" to "don't", "you will" to "you'll", "cannot" to "can't". Do not force them where they sound awkward or change emphasis.

**Address the reader as "you".**
- "Users can configure..." becomes "You can configure..."
- "It is recommended that..." becomes "We recommend..." or "You should..."

**Active voice.**
- "The file is read by the server" becomes "The server reads the file"
- "A branch can be created using..." becomes "You can create a branch using..."
- Some passive constructions in reference docs are intentional; only switch where it reads naturally.

**Split long sentences.** If a sentence runs past ~25 words with a natural split point, break it in two. Do not split if the break sounds choppy or loses meaning.

## Procedure

1. Read the target file in full.
2. Go through Part 1 and Part 2. For each finding, note the original passage, the matched pattern, and a proposed rewrite.
3. Present findings grouped by category before changing anything:

   ```
   PATTERN: [pattern name]
   ORIGINAL: "..."
   SUGGESTED: "..."
   ```

   Then ask: "Apply all fixes, review individually, or cancel?"
4. Apply per the user's choice (all at once, one at a time with approval, or cancel).
5. Report how many findings were in each category and how many were applied.

## Notes

- Prettier formatting and `updatedOn` are handled by the pre-commit hook; no manual formatting step needed.
- Terminology rules (Postgres vs PostgreSQL, feature capitalization) live in the neon-terminology skill and `.claude/neon-terminology.md`.
