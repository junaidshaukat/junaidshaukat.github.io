class Constant {
  constructor() {
    this.firstname = "Junaid";
    this.lastname = "Shaukat";
    this.journey = 2020;
    this.country = "Pakistan";
    this.city = "Islamabad";
    this.address = "Arsalan Town";

    this.facebook = ["https://www.facebook.com/"];
    this.linkedin = ["https://www.linkedin.com/in/junaid-shaukat-215a89116"];
    this.whatsapp = ["https://call.whatsapp.com/voice/AhtmpEA8LjBg70yki17PTv"];
    this.phone = ["+92 318 1524864", "+92 318 1524864"];
    this.email = ["junaidshaukat123@gmail.com", "codinggero@gmail.com"];
    this.github = [
      "https://github.com/junaidshaukat",
      "https://github.com/codinggero",
    ];

    this.birthdate = new Date("1996-12-15");

    this.experience = new Date().getFullYear() - this.journey;
  }

  get fullname() {
    return this.firstname + " " + this.lastname;
  }

  get dob() {
    return this.birthdate.toLocaleDateString("en-US");
  }

  get age() {
    return new Date().getFullYear() - this.birthdate.getFullYear();
  }
}

class Home extends Constant {
  constructor() {
    super();
    $("fullname").text(this.fullname);
    $("age").text(this.age);
    $("dob").text(this.dob);
    $("country").text(this.country);
    $("city").text(this.city);
    $("address").text(this.address);
    $("freelance").text("Available");
    $("email").text(this.email[0]);
    $("phone").text(this.phone[0]);

    $("a[href='#email']").attr({
      href: "mailto:" + this.email[0],
    });

    $("a[href='#phone']").attr({
      href: "tel:" + this.phone[0],
    });

    $("a[href='#facebook']").attr({
      href: this.facebook[0],
    });

    $("a[href='#linkedin']").attr({
      href: this.linkedin[0],
    });

    $("a[href='#whatsapp']").attr({
      href: this.whatsapp[0],
    });

    $("a[href='#github']").attr({
      href: this.github[0],
    });
  }
}

class About extends Constant {
  constructor() {
    super();
    $("experience").text(this.experience);
    $("clients").text("75");
    $("awards").text("5");
    $("projects").text("115");

    this.about();
    this.languages();
    this.skills();
  }

  about() {
    const data = [
      "I am web and mobile app developer and develop and design many apps using differents framworks and tools such as flutter, nodejs etc.",
      "My expertise in designing and developing applications for various platforms is invaluable in meeting the evolving needs of users and businesses.",
    ];

    $("about-me").html(
      data.map((me) => {
        return `<p class="margin-top-30">${me}</p>`;
      })
    );
  }

  languages() {
    const data = [
      { title: "Urdu", subtitle: "native", level: 5 },
      { title: "English", subtitle: "intermediate", level: 4 },
    ];

    $("languages").html(
      data.map((lan) => {
        return `
          <div class="skill">
            <h5 class="name">${lan.title}</h5>
            <div>
              <span class="${lan.level >= 1 ? true : false}"></span>
              <span class="${lan.level >= 2 ? true : false}"></span>
              <span class="${lan.level >= 3 ? true : false}"></span>
              <span class="${lan.level >= 4 ? true : false}"></span>
              <span class="${lan.level >= 5 ? true : false}"></span>
            </div>
            <span>${lan.subtitle}</span>
          </div>`;
      })
    );
  }

  skills() {
    const data = [
      {
        title: "Mobile Application Development",
        subtitle: "Using Flutter Develop Ios/Android App",
        level: 5,
      },
      {
        title: "Web Application Development",
        subtitle: "Expess Js Framework,Php Laravel",
        level: 5,
      },
      {
        title: "Desktop Application Development",
        subtitle: "Flutter Desktop Application",
        level: 5,
      },
      {
        title: "REST API's Development",
        subtitle: "Using NodeJS & PHP",
        level: 5,
      },
    ];
    $("skills").html(
      data.map((lan) => {
        return `
          <div class="skill">
            <h5 class="name">${lan.title}</h5>
            <div>
              <span class="${lan.level >= 1 ? true : false}"></span>
              <span class="${lan.level >= 2 ? true : false}"></span>
              <span class="${lan.level >= 3 ? true : false}"></span>
              <span class="${lan.level >= 4 ? true : false}"></span>
              <span class="${lan.level >= 5 ? true : false}"></span>
            </div>
            <span>${lan.subtitle}</span>
          </div>`;
      })
    );
  }
}

class Resume extends Constant {
  constructor() {
    super();
    this.educations();
    this.experiences();
    this.skills();
    this.projects();
  }

  educations() {
    const data = [
      {
        title: "Bachelor of Information Technology [GPA = 3.0 / 4.0]",
        subtitle: "Bahria University - Islamabad Campus",
        date: "2017-2021",
        grade: "Grade: 3.1",
      },
      {
        title: "Intermediate of Computer Science (ICS)",
        subtitle: "Punjab Group of Colleges",
        date: "2015-2017",
        grade: "Grade: 665",
      },
      {
        title: "Secondary School Certificate (CS)",
        subtitle: "Govt Boys High School Dhirkot Sattian",
        date: "2013-2015",
        grade: "Grade: 720",
      },
    ];

    $("educations").html(
      data.map((edu) => {
        return `
        <div class="item">
          <div class="date">
            <span>${edu.date}</span>
          </div>
          <div class="content">
            <h4>${edu.title}</h4>
            <p>${edu.subtitle}</p>
            <p>${edu.grade}</p>
          </div>
        </div>`;
      })
    );
  }

  experiences() {
    const data = [
      {
        title: "Bachelor of Information Technology [GPA = 3.0 / 4.0]",
        subtitle: "Bahria University - Islamabad Campus",
        date: "2017-2021",
        grade: "Grade: 3.1",
      },
      {
        title: "Intermediate of Computer Science (ICS)",
        subtitle: "Punjab Group of Colleges",
        date: "2015-2017",
        grade: "Grade: 665",
      },
      {
        title: "Secondary School Certificate (CS)",
        subtitle: "Govt Boys High School Dhirkot Sattian",
        date: "2013-2015",
        grade: "Grade: 720",
      },
    ];

    $("experiences").html(
      data.map((edu) => {
        return `
        <div class="item">
          <div class="date">
            <span>${edu.date}</span>
          </div>
          <div class="content">
            <h4>${edu.title}</h4>
            <p>${edu.subtitle}</p>
            <p>${edu.grade}</p>
          </div>
        </div>`;
      })
    );
  }
  skills() {}
  projects() {}
}

(function () {
  const home = new Home();
  const about = new About();
  const resume = new Resume();
})();
