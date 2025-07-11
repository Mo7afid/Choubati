// التقاط البيانات من الرابط
const params = new URLSearchParams(window.location.search);
const answer = params.get("q1");
const resultDiv = document.getElementById("result");

let result = "";

switch (answer) {
  case "sciences":
    result = `
      <div class="result-title">الشعبة العلمية</div>
      ✅ أنت تميل إلى المواد العلمية مثل الرياضيات والفيزياء!  
      هذه الشعبة تناسبك لأنها تعتمد على التفكير المنطقي والتحليل.  
      <br><strong>نصيحة:</strong> حافظ على مستواك في الرياضيات، وابدأ في تعلم البرمجة أو الفيزياء التطبيقية.
    `;
    break;

  case "literature":
    result = `
      <div class="result-title">الشعبة الأدبية</div>
      ✍️ أنت تميل للغات والكتابة والتعبير.  
      هذه الشعبة ستفتح لك آفاقًا في القانون، الإعلام، التعليم، أو الترجمة.
      <br><strong>نصيحة:</strong> طور مهاراتك في القراءة والكتابة، خاصة في العربية والفرنسية.
    `;
    break;

  case "economy":
    result = `
      <div class="result-title">شعبة الاقتصاد والتدبير</div>
      💰 لديك ميول نحو المنطق العملي والمجتمع.  
      هذه الشعبة تناسبك إن كنت تفكر في التجارة أو التسيير أو المحاسبة.
      <br><strong>نصيحة:</strong> تعلم أساسيات الاقتصاد وابدأ بقراءة مقالات مالية بسيطة.
    `;
    break;

  case "tech":
    result = `
      <div class="result-title">شعبة التكنولوجيا</div>
      🧠 تحب التكنولوجيا والمعلوميات؟ هذه الشعبة مثالية لك.  
      ستجد نفسك في مجالات مثل الإعلاميات، الإلكترونيات أو الهندسة.
      <br><strong>نصيحة:</strong> تعلم HTML/CSS أو إصلاح الأجهزة كمهارة أولية.
    `;
    break;

  default:
    result = `
      <div class="result-title">❗ لم يتم اختيار إجابة</div>
      المرجو العودة للاختبار واختيار إجابة واحدة على الأقل.
    `;
}

resultDiv.innerHTML = result;