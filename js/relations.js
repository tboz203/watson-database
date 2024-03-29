// All our initial data
// this needs to be able to be changed (and verified?) somehow
define(function(){
  relations = {
  students: { //{{{
    name: 'Students',
    display_name: 'Students',
    head: ['SName', 'Age', 'Major', 'ID', 'Sex', 'Address', 'City', 'State'],
    rows: [
      ['Anderson B.',   19, 'CS',   55555501, 'M', '101 Rocket Way',    'Atlantis', 'CA'],
      ['Barnes E.',     17, 'MATH', 55555502, 'M', '1402 Elf Lane',     'Ruston',   'LA'],
      ['Bronson P.',    26, 'MATH', 55555503, 'M', '1 Web Master',      'Ruston',   'LA'],
      ['Brooks D.',     18, 'CS',   55555504, 'F', '900 Baird Street',  'Dallas',   'TX'],
      ['Garret D.',     20, 'PSY',  55555505, 'M', 'BGB Consulting',    'Dallas',   'TX'],
      ['Howard M.',     21, 'CS',   55555506, 'M', '5 Scarborough',     'Dallas',   'TX'],
      ['Huey B.',       20, 'CS',   55555507, 'F', '1 Historic Place',  'Jackson',  'MS'],
      ['Kleinpeter J.', 24, 'CS',   55555508, 'M', '69 Watson Lane',    'Ruston',   'LA'],
      ['Kyzar D.',      18, 'CS',   55555509, 'M', '49 Animae Way',     'Hammond',  'LA'],
      ['Moore D.',      19, 'MATH', 55555510, 'M', 'No. 7 Seagram',     'Ruston',   'LA'],
      ['Moore L.',      20, 'MATH', 55555511, 'F', '2 Pot Place',       'New york', 'NY'],
      ['Morton M.',     30, 'ACCT', 55555512, 'M', '2010 Skid Row',     'Compton',  'CA'],
      ['Pittard S.',    22, 'ACCT', 55555513, 'M', '111 Easy Street',   'Ruston',   'LA'],
      ['Plock C.',      22, 'MGT',  55555514, 'M', '13 Nsf Road',       'Ruston',   'LA'],
      ['Slack J.',      28, 'PSY',  55555515, 'M', '1 Pirate\'s Cove',  'Ruston',   'LA'],
      ['Talton J.',     19, 'PSY',  55555516, 'M', '666 Microsoft',     'Redmond',  'WA'],
      ['Teague L.',     18, 'PSY',  55555517, 'F', 'Fern Gully Farm',   'Terry',    'LA'],
      ['Tucker T.',     45, 'MGT',  55555518, 'F', 'Prop Wash Way',     'Eldorado', 'AR'],
      ['Walker J.',     23, 'CS',   55555519, 'M', '42 Ocean Drive',    'Venice',   'CA'],
      ['Walker R.',     21, 'CS',   55555520, 'M', '9 Iron Drive',      'Monroe',   'LA']
    ]
  }, //}}}
  faculty: { //{{{
    name: 'Faculty',
    display_name: 'Faculty',
    head: ['FName', 'Dept', 'Office', 'Phone', 'SSN', 'Salary'],
    rows: [
      ['Kurtz B.L.',    'CompSci',    'NH 224',   2571111, 111223333, 70000],
      ['Oneal M.B.',    'CompSci',    'NH 247',   2572931, 222334444, 60000],
      ['Carpenter J.',  'Math',       'GTM 300',  2572222, 333445555, 50000],
      ['Lankford D.',   'Math',       'GTM 311',  2573333, 444556666, 45000],
      ['Tassin M.',     'Business',   'CAB 111',  2574444, 555667777, 65000],
      ['Springer T.',   'Psychology', 'WH 123',   2575555, 666778888, 47000],
      ['Johnson R.',    'English',    'GTM 111',  2576666, 777889999, 40000]
    ]
  }, //}}}
  courses: { //{{{
    name: 'Courses',
    display_name: 'Courses',
    head: ['FName', 'SEQ_NO', 'Course', 'Quarter', 'Year', 'Credits'],
    rows: [
      ['Oneal M.B.',    100001, 'CS 100',   'FALL',   2005, 3],
      ['Kurtz B.L.',    100002, 'CS 120',   'FALL',   2005, 3],
      ['Carpenter J.',  100003, 'MATH 240', 'FALL',   2005, 3],
      ['Tassin M.',     100004, 'ACCT 101', 'FALL',   2005, 3],
      ['Oneal M.B.',    100005, 'CS 100',   'WINTER', 2006, 3],
      ['Oneal M.B.',    100006, 'CS 120',   'WINTER', 2006, 3],
      ['Kurtz B.L.',    100007, 'CS 220',   'WINTER', 2006, 3],
      ['Lankford D.',   100008, 'MATH 240', 'WINTER', 2006, 3],
      ['Johnson R.',    100009, 'ENGL 201', 'SPRING', 2006, 3],
      ['Carpenter J.',  100010, 'MATH 241', 'SPRING', 2006, 3],
      ['Springer T.',   100011, 'PSY 201',  'SPRING', 2006, 3],
      ['Kurtz B.L.',    100012, 'CS 220',   'FALL',   2006, 3],
      ['Oneal M.B.',    100013, 'CS 100',   'WINTER', 2007, 3]
    ]
  }, //}}}
  grades: { //{{{
    name: 'Grades',
    display_name: 'Grades',
    head: ['ID', 'SEQ_NO', 'Grade'],
    rows: [
      [55555501, 100001, 'A'],
      [55555502, 100001, 'B'],
      [55555503, 100001, 'B'],
      [55555504, 100001, 'C'],
      [55555505, 100001, 'D'],
      [55555506, 100002, 'B'],
      [55555507, 100002, 'C'],
      [55555508, 100002, 'C'],
      [55555509, 100002, 'D'],
      [55555510, 100002, 'D'],
      [55555511, 100002, 'F'],
      [55555506, 100003, 'A'],
      [55555507, 100003, 'B'],
      [55555508, 100003, 'B'],
      [55555509, 100003, 'C'],
      [55555510, 100003, 'D'],
      [55555511, 100003, 'F'],
      [55555512, 100004, 'A'],
      [55555513, 100004, 'A'],
      [55555514, 100004, 'B'],
      [55555510, 100004, 'B'],
      [55555511, 100004, 'D'],
      [55555515, 100005, 'A'],
      [55555516, 100005, 'A'],
      [55555505, 100005, 'B'],
      [55555517, 100005, 'B'],
      [55555518, 100005, 'C'],
      [55555501, 100006, 'A'],
      [55555502, 100006, 'A'],
      [55555503, 100006, 'A'],
      [55555509, 100006, 'A'],
      [55555504, 100006, 'B'],
      [55555510, 100006, 'B'],
      [55555511, 100006, 'F'],
      [55555520, 100007, 'A'],
      [55555519, 100007, 'B'],
      [55555506, 100007, 'C'],
      [55555507, 100007, 'C'],
      [55555508, 100007, 'D'],
      [55555501, 100008, 'A'],
      [55555502, 100008, 'A'],
      [55555503, 100008, 'B'],
      [55555504, 100008, 'B'],
      [55555510, 100008, 'C'],
      [55555511, 100008, 'D'],
      [55555501, 100009, 'A'],
      [55555502, 100009, 'A'],
      [55555503, 100009, 'A'],
      [55555504, 100009, 'A'],
      [55555505, 100009, 'A'],
      [55555506, 100009, 'A'],
      [55555507, 100009, 'B'],
      [55555508, 100009, 'B'],
      [55555509, 100009, 'B'],
      [55555510, 100009, 'C'],
      [55555501, 100010, 'A'],
      [55555502, 100010, 'A'],
      [55555520, 100010, 'A'],
      [55555506, 100010, 'B'],
      [55555503, 100010, 'B'],
      [55555504, 100010, 'B'],
      [55555507, 100010, 'B'],
      [55555508, 100010, 'B'],
      [55555519, 100010, 'C'],
      [55555509, 100010, 'C'],
      [55555510, 100010, 'D'],
      [55555511, 100011, 'A'],
      [55555512, 100011, 'A'],
      [55555513, 100011, 'A'],
      [55555514, 100011, 'A'],
      [55555515, 100011, 'A'],
      [55555520, 100011, 'A'],
      [55555516, 100011, 'B'],
      [55555517, 100011, 'B'],
      [55555518, 100011, 'B'],
      [55555519, 100011, 'B']
    ]
  }, //}}}
  };

  console.log('relations, standing by');
  return relations;
});

console.log('relations.js, standing by');
