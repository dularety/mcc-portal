<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MCC Portal</title>
    <meta
      name="description"
      content="Medical Counselling Committee registration portal mockup"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand-wrap">
          <div class="brand-mark">MCC</div>
          <div>
            <h1>MCC</h1>
            <p>Portal</p>
          </div>
        </div>

        <nav class="side-nav" aria-label="Main navigation">
          <button class="nav-item active" type="button">
            <span>🏠</span>
            Dashboard
          </button>
          <button class="nav-item" type="button">
            <span>🧾</span>
            Registration
          </button>
          <button class="nav-item" type="button">
            <span>📄</span>
            Application
          </button>
          <button class="nav-item" type="button">
            <span>💳</span>
            Fee Payment
          </button>
          <button class="nav-item" type="button">
            <span>🎯</span>
            Choice Filling
          </button>
          <button class="nav-item" type="button">
            <span>📣</span>
            Notices
          </button>
        </nav>

        <div class="support-card">
          <p class="eyebrow">Quick Help</p>
          <h3>Need support?</h3>
          <p>Call 1800-XXX-XXXX or email support@mcc.gov.in</p>
        </div>
      </aside>

      <main class="main-panel">
        <header class="topbar">
          <div>
            <p class="eyebrow">Medical Counselling Committee</p>
            <h2>Registration & Counselling Portal</h2>
          </div>
          <div class="topbar-actions">
            <button class="ghost-btn" type="button">Language</button>
            <button class="primary-btn" type="button">Logout</button>
          </div>
        </header>

        <section class="hero-grid">
          <div class="hero-card">
            <div class="hero-copy">
              <p class="eyebrow motif">Current cycle</p>
              <h3>NEET UG Counselling 2026</h3>
              <p>
                Complete registration, document verification, and choice filling
                through the official online counselling process.
              </p>
            </div>
            <div class="hero-actions">
              <button class="primary-btn" type="button">Continue Registration</button>
              <button class="secondary-btn" type="button">Download Guide</button>
            </div>
          </div>

          <div class="mini-stats">
            <div class="stat-box">
              <span class="stat-label">Applications</span>
              <strong>1,24,356</strong>
            </div>
            <div class="stat-box">
              <span class="stat-label">Seats Available</span>
              <strong>48,742</strong>
            </div>
            <div class="stat-box">
              <span class="stat-label">Last Update</span>
              <strong>Today, 10:30 AM</strong>
            </div>
          </div>
        </section>

        <section class="content-grid">
          <div class="panel form-panel">
            <div class="section-header">
              <h3>Candidate Registration</h3>
              <span class="badge success">In Progress</span>
            </div>

            <div class="stepper" aria-label="Registration progress">
              <span class="step active">1</span>
              <span class="step active">2</span>
              <span class="step">3</span>
              <span class="step">4</span>
            </div>

            <form class="registration-form" id="registrationForm">
              <div class="field-row two-col">
                <label>
                  NEET Roll No.
                  <input type="text" value="1234567890" />
                </label>
                <label>
                  Application No.
                  <input type="text" value="MCC2026-45821" />
                </label>
              </div>

              <div class="field-row two-col">
                <label>
                  Full Name
                  <input type="text" value="Ananya Sharma" />
                </label>
                <label>
                  Date of Birth
                  <input type="date" value="2004-07-13" />
                </label>
              </div>

              <div class="field-row two-col">
                <label>
                  Category
                  <select>
                    <option>General</option>
                    <option>OBC-NCL</option>
                    <option>SC</option>
                    <option>ST</option>
                    <option>EWS</option>
                  </select>
                </label>
                <label>
                  Gender
                  <select>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>

              <div class="field-row two-col">
                <label>
                  Mobile Number
                  <input type="tel" value="+91 9876543210" />
                </label>
                <label>
                  Email ID
                  <input type="email" value="ananya.sharma@email.com" />
                </label>
              </div>

              <div class="field-row one-col">
                <label>
                  Permanent Address
                  <textarea rows="3">B-14, Green Park, New Delhi - 110016</textarea>
                </label>
              </div>

              <div class="form-actions">
                <button class="secondary-btn" type="button">Save Draft</button>
                <button class="primary-btn" type="submit">Submit & Continue</button>
              </div>
            </form>
          </div>

          <div class="panel status-panel">
            <div class="section-header">
              <h33>Application Status</h3>
              <span class="badge warning">Documents Pending</span>
            </div>

            <div class="status-card success">
              <div class="status-topline">
                <span>Registration</span>
                <strong>Completed</strong>
              </div>
              <div class="progress-track"><span style="width:100%"></span></div>
            </div>

            <div class="status-card warning">
              <div class="status-topline">
                <span>Verification</span>
                <strong>Pending</strong>
              </div>
              <div class="progress-track"><span style="width:68%"></span></div>
            </div>

            <div class="status-card neutral">
              <div class="status-topline">
                <span>Choice Filling</span>
                <strong>Not Started</strong>
              </div>
              <div class="progress-track"><span style="width:22%"></span></div>
            </div>

            <div class="notice-box">
              <p class="eyebrow">Important</p>
              <ul>
                <li>Upload category certificate before 24 Oct 2026.</li>
                <li>Medical certificate must be in PDF format.</li>
                <li>Seat allotment result expected on 30 Oct 2026.</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="panel lower-panel">
          <div class="section-header">
            <h3>Dashboard Overview</h3>
            <button class="ghost-btn" type="button">View Timeline</button>
          </div>

          <div class="cards-grid">
            <article class="info-card accent">
              <span class="card-icon">✅</span>
              <div>
                <p>Application ID</p>
                <strong>MCC2026-45821</strong>
              </div>
            </article>

            <article class="info-card">
              <span class="card-icon">📘</span>
              <div>
                <p>Course Preference</p>
                <strong>MBBS / BDS</strong>
              </div>
            </article>

            <article class="info-card">
              <span class="card-icon">🧑‍⚕️</span>
              <div>
                <p>Qualifying Exam</p>
                <strong>NEET UG 2026</strong>
              </div>
            </article>

            <article class="info-card">
              <span class="card-icon">🔔</span>
              <div>
                <p>Notifications</p>
                <strong>03 New</strong>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>

    <script src="script.js"></script>
  </body>
</html>
