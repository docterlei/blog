#  查询语句和函数

## 语句

- 1. WHERE：查询条件，比如 WHERE id=1
- 2. AS：别名，比如 SELECT xxx AS 'yyy'
- 3. AND: 连接多个条件
- 4. LIKE: 模糊查询
- 5. IN/NOT IN：集合查找，比如 WHERE a IN (1,2)
- 6. BETWEEN AND：区间查找，比如 WHERE a BETWEEN 1 AND 10
- 7. LIMIT：分页，比如 LIMIT 0,5
- 8. ORDER BY：排序，可以指定先根据什么升序、如果相等再根据什么降序，比如 ORDER BY a desc,b asc
- 9. GROUP BY：分组，比如 GROUP BY aaa
- 10. HAVING：分组之后再过滤，比如 GROUP BY aaa HAVING xxx > 5
- 11. DISTINCT：去重

```sql
1. SELECT name, score  student;

2. SELECT name AS 名字, score AS 分数 FROM student;

3. SELECT name AS 名字,class AS 班级 FROM student WHERE gender='男' AND score >= 90;

4. SELECT * FROM student WHERE name LIKE '王%';

5. SELECT * FROM student WHERE class IN ('一班', '二班'); 
   SELECT * FROM student WHERE class NOT IN ('一班', '二班');

6. SELECT * FROM student WHERE age BETWEEN 18 AND 20;

7. SELECT * FROM student LIMIT 0,5;

8. SELECT class AS 班级, AVG(score) AS 平均成绩
    FROM student
    GROUP BY class
    ORDER BY 平均成绩 DESC;

9. SELECT class, count(*) AS count FROM student GROUP BY class;

10. SELECT class,AVG(score) AS avg_score
    FROM student
    GROUP BY class
    HAVING avg_score > 90;

11. SELECT DISTINCT class FROM student;


```

## 函数

- 1. 聚合函数：AVG、COUNT、SUM、MIN、MAX
- 2. 字符串函数：CONCAT、SUBSTR、LENGTH、UPPER、LOEWER
- 3. 数值函数：ROUND、CEIL、FLOOR、ABS、mod
- 4. 日期函数：YEAR、MONTH、DAY、DATE、TIME
- 5. 条件函数：IF、CASE
- 6. 系统函数：VERSION、DATEBASE、USER
- 7. 类型转换函数：convert、cast、date_format、str_to_date
- 8. 其他函数：nullif、coalesce、greatest、least

```sql
1. SELECT AVG(score) AS 平均成绩,COUNT(*) AS 人数,SUN(score) AS 总成绩,MIN(score) AS 最低分, MAX(score) AS 最高分 FROM student 

2. SELECT CONCAT('xx', name, 'yy'), SUBSTR(name,2,3), LENGTH(name), UPPER('aa'), LOWER('TT') FROM student;

3. SELECT ROUND(1.234567, 2), CEIL(1.234567), FLOOR(1.234567), ABS(-1.234567), MOD(5, 2);

4. SELECT YEAR('2023-06-01 22:06:03'), MONTH('2023-06-01 22:06:03'),DAY('2023-06-01 22:06:03'),DATE('2023-06-01 22:06:03'), TIME('2023-06-01 22:06:03');

5. SELECT name, IF(score >=60, '及格', '不及格') FROM student;
   SELECT name, score, CASE WHEN score >=90 THEN '优秀' WHEN score >=60 THEN '良好'ELSE '差' END AS '档次' FROM student;

6. SELECT VERSION(), DATABASE(), USER()


```

