import "./App.css";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/jahnaviyerram-/",
  resume:
    "https://drive.google.com/file/d/1XuL5VAUMgEgFoMGQGw6M-MZ0fn4hojrM/view?usp=sharing",
  email: "jahnaviyerram514@gmail.com",
  github: "https://github.com/jahnaviyerram514",
};

const SKILLS = [
  { title: "Frontend", items: ["React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
  { title: "Backend", items: ["Java", "Spring Boot", "Spring MVC", "REST APIs"] },
  { title: "Cloud & DevOps", items: ["AWS (EC2, S3, IAM, CloudWatch, SQS)", "Jenkins", "CI/CD"] },
  { title: "Databases", items: ["MySQL", "Oracle", "SQL Server", "MongoDB", "Cassandra"] },
];

const EXPERIENCE = [
  {
    role: "Senior Full Stack Developer",
    company: "Acuity Brands",
    location: "Atlanta, GA",
    dates: "May 2024 – Present",
    highlights: [
      "Built customer-facing SPA flows for product configuration, pricing estimates, and workflow tracking.",
      "Developed responsive UI using React + TypeScript with reusable component patterns.",
      "Integrated frontend with Java/Spring Boot REST APIs and reliable error handling.",
      "Supported backend microservices and async workflows via queues (SQS).",
      "Deployed/monitored services on AWS and supported CI/CD with Jenkins.",
    ],
    tags: ["React", "TypeScript", "Spring Boot", "AWS", "Jenkins"],
  },
  {
    role: "Full Stack Developer",
    company: "T-Mobile",
    location: "Frisco, TX",
    dates: "Aug 2021 – Dec 2023",
    highlights: [
      "Built Angular (TypeScript) SPA features for subscriber account management and service workflows.",
      "Developed reusable Angular components/services and integrated REST APIs using HttpClientModule.",
      "Implemented client-side validation and predictable UI behavior.",
      "Built Java/Spring Boot APIs with consistent error responses and exception handling.",
      "Supported production scale with deployments and monitoring/logging.",
    ],
    tags: ["Angular", "TypeScript", "Spring Boot", "Microservices"],
  },
  {
    role: "Full Stack Developer",
    company: "Old National Bank",
    location: "Chicago, IL",
    dates: "Dec 2019 – Jul 2021",
    highlights: [
      "Worked on financial dashboards and reporting features for account/transaction analysis.",
      "Developed backend services using Java/Spring Boot and integrated data stores including Cassandra.",
      "Supported cloud-hosted deployments and monitoring using AWS services.",
    ],
    tags: ["React", "Java", "Cassandra", "AWS"],
  },
  {
    role: "Software Engineer",
    company: "eClerx Services Ltd",
    location: "Hyderabad, India",
    dates: "Sep 2016 – Apr 2018",
    highlights: [
      "Supported application development and enhancements for internal and client-facing systems.",
      "Built UI features and integrated backend services based on business requirements.",
      "Worked with SQL and reporting/data validation tasks to ensure correctness.",
    ],
    tags: ["Java", "SQL", "Web Apps"],
  },
];


function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function FloatingOrbs() {
  // purely visual/animated background elements
  return (
    <div className="orbs" aria-hidden="true">
      <div className="orb o1" />
      <div className="orb o2" />
      <div className="orb o3" />
    </div>
  );
}

export default function App() {
  return (
    <div className="page">
      <FloatingOrbs />

      {/* HEADER */}
      <header className="header">
        <div className="topRow">
          <div className="brand">
            <div className="avatar" aria-hidden="true">
              JY
            </div>
            <div>
              <h1>Jahnavi Yerram</h1>
              <p className="headline">
                Senior Full-Stack Software Engineer • React • Angular • Java • Spring Boot
              </p>
            </div>
          </div>

          <div className="ctaRow">
            <a className="btn primary" href={LINKS.resume} target="_blank" rel="noreferrer">
              Resume (PDF)
            </a>
            <a className="btn" href={LINKS.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn" href={LINKS.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="btn" href={`mailto:${LINKS.email}`}>
              Email
            </a>
          </div>
        </div>

        {/* CENTERED HERO */}
        <div className="hero">
          <div className="heroInner">
            <div className="chipRow">
              <span className="chip">Frontend-leaning</span>
              <span className="chip">Full-Stack</span>
              <span className="chip">Enterprise Apps</span>
            </div>

            <h2 className="heroTitle">
              I build clean, fast UIs and connect them to reliable backend systems.
            </h2>

            <p className="heroSub">
              7+ years across enterprise, telecom, and finance. Strong React/Angular UI delivery with
              Java/Spring Boot backend foundations, API integration, and production-safe releases.
            </p>

            <div className="heroBadges">
              <Pill>React</Pill>
              <Pill>Angular</Pill>
              <Pill>TypeScript</Pill>
              <Pill>Java</Pill>
              <Pill>Spring Boot</Pill>
              <Pill>AWS</Pill>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="main">
        {/* ABOUT + FOCUS */}
        <section className="grid two section">
          <Card className="pop">
            <div className="sectionTitle">About</div>
            <p className="muted">
              Senior Full-Stack Engineer with 7+ years building customer-facing and enterprise web
              applications across enterprise, telecom, and finance. Comfortable owning features end-to-end:
              UI implementation, API integration, and release support.
            </p>

            <div className="proof">
              <div className="proofItem">
                <div className="proofNum">7+</div>
                <div className="proofText">Years</div>
              </div>
              <div className="proofItem">
                <div className="proofNum">React</div>
                <div className="proofText">SPA Delivery</div>
              </div>
              <div className="proofItem">
                <div className="proofNum">AWS</div>
                <div className="proofText">Deploy + Monitor</div>
              </div>
            </div>
          </Card>

          <Card className="pop">
            <div className="sectionTitle">Focus</div>
            <ul className="checklist">
              <li>Responsive UI + reusable components</li>
              <li>Reliable REST API integration and predictable UI state</li>
              <li>Production-safe releases, monitoring, and CI/CD hygiene</li>
              <li>Strong collaboration across teams</li>
            </ul>
          </Card>
        </section>

        {/* SKILLS */}
        <section className="section">
          <div className="sectionHeader">
            <h2>Skills</h2>
          </div>

          <div className="grid skills">
            {SKILLS.map((g) => (
              <Card key={g.title} className="pop">
                <div className="sectionTitle">{g.title}</div>
                <div className="pillWrap">
                  {g.items.map((x) => (
                    <Pill key={x}>{x}</Pill>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section">
          <div className="sectionHeader">
            <h2>Experience</h2>
          </div>

          <div className="stack">
            {EXPERIENCE.map((e) => (
              <Card key={`${e.company}-${e.dates}`} className="pop">
                <div className="expTop">
                  <div>
                    <div className="expRole">{e.role}</div>
                    <div className="expMeta">
                      <span className="expCompany">{e.company}</span>
                      <span className="dot">•</span>
                      <span className="muted">{e.location}</span>
                      <span className="dot">•</span>
                      <span className="muted">{e.dates}</span>
                    </div>
                  </div>
                  <div className="pillWrap right">
                    {e.tags.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>
                </div>

                <ul className="bullets">
                  {e.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section">
          <Card className="pop">
            <div className="sectionTitle">Education</div>
            <div className="edu">
              <div>
                <div className="eduLine">
                  <strong>Master’s in Computer Science</strong>
                </div>
                <div className="muted">University of Central Missouri</div>
              </div>
              <div className="eduDivider" />
              <div>
                <div className="eduLine">
                  <strong>Bachelor’s in Information Technology</strong>
                </div>
                <div className="muted">JNT University, Hyderabad</div>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <footer className="footer">
        <div className="muted">© {new Date().getFullYear()} Jahnavi Yerram</div>
      </footer>
    </div>
  );
}
