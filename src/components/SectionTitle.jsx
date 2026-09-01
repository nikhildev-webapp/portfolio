function SectionTitle({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`section-heading ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && <span className="section-kicker">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export default SectionTitle;
