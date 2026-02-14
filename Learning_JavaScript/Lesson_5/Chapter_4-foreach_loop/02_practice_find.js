// 100 objects with keys: title, subject, publishDate


//here we need find the History book database and store in variable that can use to print





const books = [
  { title: "Book 1", subject: "Math", publishDate: "2001-01-01" },
  { title: "Book 2", subject: "Science", publishDate: "2002-02-02" },
  { title: "Book 3", subject: "History", publishDate: "2003-03-03" },
  { title: "Book 4", subject: "Physics", publishDate: "2004-04-04" },
  { title: "Book 5", subject: "Chemistry", publishDate: "2005-05-05" },
  { title: "Book 6", subject: "Biology", publishDate: "2006-06-06" },
  { title: "Book 7", subject: "Geography", publishDate: "2007-07-07" },
  { title: "Book 8", subject: "English", publishDate: "2008-08-08" },
  { title: "Book 9", subject: "Computer Science", publishDate: "2009-09-09" },
  { title: "Book 10", subject: "Economics", publishDate: "2010-10-10" },

  { title: "Book 11", subject: "Math", publishDate: "2011-01-11" },
  { title: "Book 12", subject: "Science", publishDate: "2012-02-12" },
  { title: "Book 13", subject: "History", publishDate: "2013-03-13" },
  { title: "Book 14", subject: "Physics", publishDate: "2014-04-14" },
  { title: "Book 15", subject: "Chemistry", publishDate: "2015-05-15" },
  { title: "Book 16", subject: "Biology", publishDate: "2016-06-16" },
  { title: "Book 17", subject: "Geography", publishDate: "2017-07-17" },
  { title: "Book 18", subject: "English", publishDate: "2018-08-18" },
  { title: "Book 19", subject: "Computer Science", publishDate: "2019-09-19" },
  { title: "Book 20", subject: "Economics", publishDate: "2020-10-20" },

  { title: "Book 21", subject: "Math", publishDate: "2001-11-21" },
  { title: "Book 22", subject: "Science", publishDate: "2002-12-22" },
  { title: "Book 23", subject: "History", publishDate: "2003-01-23" },
  { title: "Book 24", subject: "Physics", publishDate: "2004-02-24" },
  { title: "Book 25", subject: "Chemistry", publishDate: "2005-03-25" },
  { title: "Book 26", subject: "Biology", publishDate: "2006-04-26" },
  { title: "Book 27", subject: "Geography", publishDate: "2007-05-27" },
  { title: "Book 28", subject: "English", publishDate: "2008-06-28" },
  { title: "Book 29", subject: "Computer Science", publishDate: "2009-07-29" },
  { title: "Book 30", subject: "Economics", publishDate: "2010-08-30" },

  { title: "Book 31", subject: "Math", publishDate: "2011-09-01" },
  { title: "Book 32", subject: "Science", publishDate: "2012-10-02" },
  { title: "Book 33", subject: "History", publishDate: "2013-11-03" },
  { title: "Book 34", subject: "Physics", publishDate: "2014-12-04" },
  { title: "Book 35", subject: "Chemistry", publishDate: "2015-01-05" },
  { title: "Book 36", subject: "Biology", publishDate: "2016-02-06" },
  { title: "Book 37", subject: "Geography", publishDate: "2017-03-07" },
  { title: "Book 38", subject: "English", publishDate: "2018-04-08" },
  { title: "Book 39", subject: "Computer Science", publishDate: "2019-05-09" },
  { title: "Book 40", subject: "Economics", publishDate: "2020-06-10" },

  { title: "Book 41", subject: "Math", publishDate: "2001-07-11" },
  { title: "Book 42", subject: "Science", publishDate: "2002-08-12" },
  { title: "Book 43", subject: "History", publishDate: "2003-09-13" },
  { title: "Book 44", subject: "Physics", publishDate: "2004-10-14" },
  { title: "Book 45", subject: "Chemistry", publishDate: "2005-11-15" },
  { title: "Book 46", subject: "Biology", publishDate: "2006-12-16" },
  { title: "Book 47", subject: "Geography", publishDate: "2007-01-17" },
  { title: "Book 48", subject: "English", publishDate: "2008-02-18" },
  { title: "Book 49", subject: "Computer Science", publishDate: "2009-03-19" },
  { title: "Book 50", subject: "Economics", publishDate: "2010-04-20" },

  { title: "Book 51", subject: "Math", publishDate: "2011-05-21" },
  { title: "Book 52", subject: "Science", publishDate: "2012-06-22" },
  { title: "Book 53", subject: "History", publishDate: "2013-07-23" },
  { title: "Book 54", subject: "Physics", publishDate: "2014-08-24" },
  { title: "Book 55", subject: "Chemistry", publishDate: "2015-09-25" },
  { title: "Book 56", subject: "Biology", publishDate: "2016-10-26" },
  { title: "Book 57", subject: "Geography", publishDate: "2017-11-27" },
  { title: "Book 58", subject: "English", publishDate: "2018-12-28" },
  { title: "Book 59", subject: "Computer Science", publishDate: "2019-01-29" },
  { title: "Book 60", subject: "Economics", publishDate: "2020-02-01" },

  { title: "Book 61", subject: "Math", publishDate: "2001-03-02" },
  { title: "Book 62", subject: "Science", publishDate: "2002-04-03" },
  { title: "Book 63", subject: "History", publishDate: "2003-05-04" },
  { title: "Book 64", subject: "Physics", publishDate: "2004-06-05" },
  { title: "Book 65", subject: "Chemistry", publishDate: "2005-07-06" },
  { title: "Book 66", subject: "Biology", publishDate: "2006-08-07" },
  { title: "Book 67", subject: "Geography", publishDate: "2007-09-08" },
  { title: "Book 68", subject: "English", publishDate: "2008-10-09" },
  { title: "Book 69", subject: "Computer Science", publishDate: "2009-11-10" },
  { title: "Book 70", subject: "Economics", publishDate: "2010-12-11" },

  { title: "Book 71", subject: "Math", publishDate: "2011-01-12" },
  { title: "Book 72", subject: "Science", publishDate: "2012-02-13" },
  { title: "Book 73", subject: "History", publishDate: "2013-03-14" },
  { title: "Book 74", subject: "Physics", publishDate: "2014-04-15" },
  { title: "Book 75", subject: "Chemistry", publishDate: "2015-05-16" },
  { title: "Book 76", subject: "Biology", publishDate: "2016-06-17" },
  { title: "Book 77", subject: "Geography", publishDate: "2017-07-18" },
  { title: "Book 78", subject: "English", publishDate: "2018-08-19" },
  { title: "Book 79", subject: "Computer Science", publishDate: "2019-09-20" },
  { title: "Book 80", subject: "Economics", publishDate: "2020-10-21" },

  { title: "Book 81", subject: "Math", publishDate: "2001-11-22" },
  { title: "Book 82", subject: "Science", publishDate: "2002-12-23" },
  { title: "Book 83", subject: "History", publishDate: "2003-01-24" },
  { title: "Book 84", subject: "Physics", publishDate: "2004-02-25" },
  { title: "Book 85", subject: "Chemistry", publishDate: "2005-03-26" },
  { title: "Book 86", subject: "Biology", publishDate: "2006-04-27" },
  { title: "Book 87", subject: "Geography", publishDate: "2007-05-28" },
  { title: "Book 88", subject: "English", publishDate: "2008-06-29" },
  { title: "Book 89", subject: "Computer Science", publishDate: "2009-07-30" },
  { title: "Book 90", subject: "Economics", publishDate: "2010-08-31" },

  { title: "Book 91", subject: "Math", publishDate: "2011-09-01" },
  { title: "Book 92", subject: "Science", publishDate: "2012-10-02" },
  { title: "Book 93", subject: "History", publishDate: "2013-11-03" },
  { title: "Book 94", subject: "Physics", publishDate: "2014-12-04" },
  { title: "Book 95", subject: "Chemistry", publishDate: "2015-01-05" },
  { title: "Book 96", subject: "Biology", publishDate: "2016-02-06" },
  { title: "Book 97", subject: "Geography", publishDate: "2017-03-07" },
  { title: "Book 98", subject: "English", publishDate: "2018-04-08" },
  { title: "Book 99", subject: "Computer Science", publishDate: "2019-05-09" },
  { title: "Book 100", subject: "Economics", publishDate: "2020-06-10" }
];


const history= books.filter(value=>value.subject==="History");
console.log(history);