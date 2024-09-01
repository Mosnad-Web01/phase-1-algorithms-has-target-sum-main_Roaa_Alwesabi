function hasTargetSum(array, target) {
  // استخدم مجموعة لتخزين الأرقام التي مررنا بها
  const numbersSeen = new Set();

  // حلقة للمرور على جميع الأرقام
  for (const number of array) {
    // حساب الرقم المطلوب ليكون المجموع يساوي target
    const complement = target - number;

    // التحقق مما إذا كان الرقم المطلوب موجودًا في المجموعة
    if (numbersSeen.has(complement)) {
      return true;
    }

    // إضافة الرقم الحالي للمجموعة
    numbersSeen.add(number);
  }

  // إذا لم نجد أي زوج مناسب
  return false;
}

/* 
  Time Complexity (Big O): 
  - الوقت: O(n) حيث n هو عدد العناصر في المصفوفة.
  - المساحة: O(n) بسبب استخدام المجموعة لتخزين الأرقام التي تم تمريرها.
*/

/* 
  Pseudocode:
  1. أنشئ مجموعة لتخزين الأرقام التي مررت بها.
  2. استخدم حلقة تمر عبر كل عنصر في المصفوفة.
  3. لكل عنصر، احسب الرقم المكمل المطلوب ليصل المجموع إلى target.
  4. تحقق مما إذا كان الرقم المكمل موجودًا بالفعل في المجموعة:
     - إذا كان موجودًا، أعد true.
     - إذا لم يكن موجودًا، أضف الرقم الحالي إلى المجموعة.
  5. إذا انتهت الحلقة ولم تجد أي زوج يحقق الشرط، أعد false.
*/

/*
  Explanation:
  في هذا الحل، نقوم بتتبع الأرقام التي مرت علينا باستخدام مجموعة (Set). لكل رقم نمر عليه، نحسب الرقم المطلوب الذي عند إضافته إلى الرقم الحالي سيعطي القيمة المطلوبة (target). إذا كان هذا الرقم المطلوب موجودًا بالفعل في المجموعة، نعيد true، مما يعني أننا وجدنا زوجًا مناسبًا من الأرقام. إذا لم نجد أي زوج بعد المرور على جميع الأرقام، نعيد false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
