const statements_english = [
    "1. If one of us apologizes when our discussion deteriorates, the discussion ends.",
    "2. I know we can ignore our differences, even if things get hard sometimes.",
    "3. When we need it, we can take our discussions with my spouse from the beginning and correct it.",
    "4. When I discuss with my spouse, to contact him will eventually work.",
    "5. The time I spent with my wife is special for us.",
    "6. We don't have time at home as partners.",
    "7. We are like two strangers who share the same environment at home rather than family.",
    "8. I enjoy our holidays with my wife.",
    "9. I enjoy traveling with my wife.",
    "10. Most of our goals are common to my spouse.",
    "11. I think that one day in the future, when I look back, I see that my spouse and I have been in harmony with each other.",
    "12. My spouse and I have similar values in terms of personal freedom.",
    "13. My spouse and I have similar sense of entertainment.",
    "14. Most of our goals for people (children, friends, etc.) are the same.",
    "15. Our dreams with my spouse are similar and harmonious.",
    "16. We're compatible with my spouse about what love should be.",
    "17. We share the same views about being happy in our life with my spouse.",
    "18. My spouse and I have similar ideas about how marriage should be.",
    "19. My spouse and I have similar ideas about how roles should be in marriage.",
    "20. My spouse and I have similar values in trust.",
    "21. I know exactly what my wife likes.",
    "22. I know how my spouse wants to be taken care of when she/he is sick.",
    "23. I know my spouse's favorite food.",
    "24. I can tell you what kind of stress my spouse is facing in her/his life.",
    "25. I have knowledge of my spouse's inner world.",
    "26. I know my spouse's basic anxieties.",
    "27. I know what my spouse's current sources of stress are.",
    "28. I know my spouse's hopes and wishes.",
    "29. I know my spouse very well.",
    "30. I know my spouse's friends and their social relationships.",
    "31. I feel aggressive when I argue with my spouse.",
    "32. When discussing with my spouse, I usually use expressions such as ‘you always’ or ‘you never’.",
    "33. I can use negative statements about my spouse's personality during our discussions.",
    "34. I can use offensive expressions during our discussions.",
    "35. I can insult my spouse during our discussions.",
    "36. I can be humiliating when we discuss.",
    "37. My discussion with my spouse is not calm.",
    "38. I hate my spouse's way of opening a subject.",
    "39. Our discussions often occur suddenly.",
    "40. We're just starting a discussion before I know what's going on.",
    "41. When I talk to my spouse about something, my calm suddenly breaks.",
    "42. When I argue with my spouse, I only go out and I don't say a word.",
    "43. I mostly stay silent to calm the environment a little bit.",
    "44. Sometimes I think it's good for me to leave home for a while.",
    "45. I'd rather stay silent than discuss with my spouse.",
    "46. Even if I'm right in the discussion, I stay silent to hurt my spouse.",
    "47. When I discuss with my spouse, I stay silent because I am afraid of not being able to control my anger.",
    "48. I feel right in our discussions.",
    "49. I have nothing to do with what I've been accused of.",
    "50. I'm not actually the one who's guilty about what I'm accused of.",
    "51. I'm not the one who's wrong about problems at home.",
    "52. I wouldn't hesitate to tell my spouse about her/his inadequacy.",
    "53. When I discuss, I remind my spouse of her/his inadequacy.",
    "54. I'm not afraid to tell my spouse about her/his incompetence."
];

const statements_frensh = [
    "1. Si l'un de nous s'excuse lorsque notre discussion se détériore, la discussion se termine.",
    "2. Je sais que nous pouvons ignorer nos différences, même si parfois les choses deviennent difficiles.",
    "3. Quand nous en avons besoin, nous pouvons reprendre nos discussions avec mon conjoint depuis le début et les corriger.",
    "4. Quand je discute avec mon conjoint, le contacter finira par fonctionner.",
    "5. Le temps que je passe avec ma femme est spécial pour nous.",
    "6. Nous n'avons pas de temps ensemble à la maison en tant que partenaires.",
    "7. Nous sommes comme deux étrangers partageant le même environnement à la maison plutôt qu'une famille.",
    "8. J'apprécie nos vacances avec ma femme.",
    "9. J'aime voyager avec ma femme.",
    "10. La plupart de nos objectifs sont communs avec mon conjoint.",
    "11. Je pense qu'un jour dans le futur, quand je regarderai en arrière, je verrai que mon conjoint et moi avons été en harmonie l'un avec l'autre.",
    "12. Mon conjoint et moi avons des valeurs similaires en matière de liberté personnelle.",
    "13. Mon conjoint et moi avons un sens du divertissement similaire.",
    "14. La plupart de nos objectifs concernant les personnes (enfants, amis, etc.) sont les mêmes.",
    "15. Nos rêves avec mon conjoint sont similaires et harmonieux.",
    "16. Nous sommes compatibles avec mon conjoint sur ce que devrait être l'amour.",
    "17. Nous partageons les mêmes opinions sur le bonheur dans notre vie avec mon conjoint.",
    "18. Mon conjoint et moi avons des idées similaires sur ce que devrait être le mariage.",
    "19. Mon conjoint et moi avons des idées similaires sur les rôles dans le mariage.",
    "20. Mon conjoint et moi avons des valeurs similaires en matière de confiance.",
    "21. Je sais exactement ce que ma femme aime.",
    "22. Je sais comment mon conjoint veut être pris en charge lorsqu'il/elle est malade.",
    "23. Je connais le plat préféré de mon conjoint.",
    "24. Je peux dire quel type de stress mon conjoint affronte dans sa vie.",
    "25. J'ai une connaissance du monde intérieur de mon conjoint.",
    "26. Je connais les angoisses fondamentales de mon conjoint.",
    "27. Je sais quelles sont les sources de stress actuelles de mon conjoint.",
    "28. Je connais les espoirs et les souhaits de mon conjoint.",
    "29. Je connais très bien mon conjoint.",
    "30. Je connais les amis de mon conjoint et leurs relations sociales.",
    "31. Je me sens agressif(ve) lorsque je me dispute avec mon conjoint.",
    "32. Lorsque je discute avec mon conjoint, j'utilise généralement des expressions telles que ‘tu fais toujours’ ou ‘tu ne fais jamais’.",
    "33. Je peux utiliser des déclarations négatives sur la personnalité de mon conjoint lors de nos discussions.",
    "34. Je peux utiliser des expressions offensantes lors de nos discussions.",
    "35. Je peux insulter mon conjoint lors de nos discussions.",
    "36. Je peux être humiliant(e) lorsque nous discutons.",
    "37. Ma discussion avec mon conjoint n'est pas calme.",
    "38. Je déteste la façon dont mon conjoint aborde un sujet.",
    "39. Nos discussions surviennent souvent soudainement.",
    "40. Nous commençons une discussion avant même que je sache ce qui se passe.",
    "41. Quand je parle à mon conjoint de quelque chose, mon calme se brise soudainement.",
    "42. Quand je me dispute avec mon conjoint, je sors simplement et je ne dis pas un mot.",
    "43. Je reste principalement silencieux(se) pour apaiser un peu l'environnement.",
    "44. Parfois, je pense qu'il est bon pour moi de quitter la maison pendant un moment.",
    "45. Je préfère rester silencieux(se) plutôt que de discuter avec mon conjoint.",
    "46. Même si j'ai raison dans la discussion, je reste silencieux(se) pour blesser mon conjoint.",
    "47. Quand je discute avec mon conjoint, je reste silencieux(se) parce que j'ai peur de ne pas pouvoir contrôler ma colère.",
    "48. Je me sens dans mon droit lors de nos discussions.",
    "49. Je n'ai rien à voir avec ce dont on m'accuse.",
    "50. En réalité, je ne suis pas celui/celle qui est coupable de ce dont on m'accuse.",
    "51. Je ne suis pas celui/celle qui est en tort pour les problèmes à la maison.",
    "52. Je n'hésiterais pas à dire à mon conjoint son insuffisance.",
    "53. Lorsque je discute, je rappelle à mon conjoint son insuffisance.",
    "54. Je n'ai pas peur de dire à mon conjoint son incompétence."
];

const statements_arabic = [
    "1. إذا اعتذر أحدنا عندما تتدهور مناقشتنا، تنتهي المناقشة.",
    "2. أعلم أنه يمكننا تجاهل اختلافاتنا، حتى لو أصبحت الأمور صعبة أحيانًا.",
    "3. عندما نحتاج إلى ذلك، يمكننا استئناف مناقشاتنا مع زوجي/زوجتي من البداية وتصحيحها.",
    "4. عندما أناقش مع زوجي/زوجتي، فإن التواصل معه/معها سينجح في النهاية.",
    "5. الوقت الذي أقضيه مع زوجتي مميز بالنسبة لنا.",
    "6. ليس لدينا وقت معًا في المنزل كشريكين.",
    "7. نحن مثل غريبين يعيشان في نفس البيئة في المنزل بدلاً من أن نكون عائلة.",
    "8. أستمتع بعطلتي مع زوجتي.",
    "9. أحب السفر مع زوجتي.",
    "10. معظم أهدافنا مشتركة بيني وبين زوجي/زوجتي.",
    "11. أعتقد أنه في يوم من الأيام في المستقبل، عندما أنظر إلى الوراء، سأرى أن زوجي/زوجتي وأنا كنا في انسجام مع بعضنا البعض.",
    "12. زوجي/زوجتي وأنا لدينا قيم متشابهة فيما يتعلق بالحرية الشخصية.",
    "13. زوجي/زوجتي وأنا لدينا نفس الذوق في الترفيه.",
    "14. معظم أهدافنا المتعلقة بالآخرين (الأطفال، الأصدقاء، إلخ) متشابهة.",
    "15. أحلامنا مع زوجي/زوجتي متشابهة ومنسجمة.",
    "16. نحن متوافقان مع زوجي/زوجتي بشأن مفهوم الحب.",
    "17. نتشارك نفس وجهات النظر حول السعادة في حياتنا مع زوجي/زوجتي.",
    "18. زوجي/زوجتي وأنا لدينا أفكار متشابهة حول كيفية أن يكون الزواج.",
    "19. زوجي/زوجتي وأنا لدينا أفكار متشابهة حول الأدوار في الزواج.",
    "20. زوجي/زوجتي وأنا لدينا قيم متشابهة في الثقة.",
    "21. أعرف بالضبط ما الذي تحبه زوجتي.",
    "22. أعرف كيف يريد زوجي/زوجتي أن يتم الاعتناء به/بها عندما يكون/تكون مريضًا/مريضة.",
    "23. أعرف الطعام المفضل لدى زوجي/زوجتي.",
    "24. أستطيع أن أخبرك بنوع الضغوطات التي يواجهها زوجي/زوجتي في حياته/حياتها.",
    "25. لدي معرفة بالعالم الداخلي لزوجي/زوجتي.",
    "26. أعرف مخاوف زوجي/زوجتي الأساسية.",
    "27. أعرف مصادر التوتر الحالية لدى زوجي/زوجتي.",
    "28. أعرف آمال وتمنيات زوجي/زوجتي.",
    "29. أعرف زوجي/زوجتي جيدًا جدًا.",
    "30. أعرف أصدقاء زوجي/زوجتي وعلاقاتهم الاجتماعية.",
    "31. أشعر بالغضب عندما أتشاجر مع زوجي/زوجتي.",
    "32. عند مناقشة الأمور مع زوجي/زوجتي، عادة ما أستخدم عبارات مثل ‘أنت دائمًا’ أو ‘أنت لا تفعل أبدًا’.",
    "33. يمكنني استخدام عبارات سلبية حول شخصية زوجي/زوجتي أثناء مناقشاتنا.",
    "34. يمكنني استخدام تعبيرات مهينة أثناء مناقشاتنا.",
    "35. يمكنني إهانة زوجي/زوجتي أثناء مناقشاتنا.",
    "36. يمكنني أن أكون مهينًا أثناء مناقشاتنا.",
    "37. مناقشتي مع زوجي/زوجتي ليست هادئة.",
    "38. أكره طريقة زوجي/زوجتي في فتح الموضوعات.",
    "39. غالبًا ما تحدث مناقشاتنا فجأة.",
    "40. نبدأ المناقشة قبل أن أدرك ما يحدث.",
    "41. عندما أتحدث إلى زوجي/زوجتي عن شيء ما، أفقد هدوئي فجأة.",
    "42. عندما أتشاجر مع زوجي/زوجتي، أخرج ببساطة دون أن أقول كلمة.",
    "43. أبقى صامتًا في الغالب لتهدئة الأجواء قليلاً.",
    "44. أحيانًا أعتقد أنه من الجيد أن أغادر المنزل لفترة من الوقت.",
    "45. أفضل البقاء صامتًا بدلاً من مناقشة الأمور مع زوجي/زوجتي.",
    "46. حتى لو كنت على حق في المناقشة، أبقى صامتًا لأجرح زوجي/زوجتي.",
    "47. عندما أناقش مع زوجي/زوجتي، أبقى صامتًا لأنني أخشى عدم السيطرة على غضبي.",
    "48. أشعر أنني على حق في مناقشاتنا.",
    "49. لا علاقة لي بما يتم اتهامي به.",
    "50. في الحقيقة، لست أنا المذنب فيما أُتهم به.",
    "51. لست أنا المخطئ بشأن المشاكل في المنزل.",
    "52. لن أتردد في إخبار زوجي/زوجتي بنقصه/نقصها.",
    "53. عندما أناقش، أذكر زوجي/زوجتي بنواقصه/نواقصها.",
    "54. لست خائفًا من إخبار زوجي/زوجتي بعدم كفاءته/كفاءتها."
];

const buttons_english = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];
const buttons_frensh = ["Fortement en désaccord", "En désaccord", "Neutre", "D'accord", "Tout à fait d'accord"];
const buttons_arabic = ["أعارض بشدة", "أعارض", "محايد", "أوافق", "أوافق بشدة"];

const results_english = {
    divorce: "Based on your responses, there are indications of significant challenges in your relationship. It may be beneficial to seek professional guidance or have open discussions with your partner about the future of your marriage.",
    no_divorce: "Your responses suggest a strong foundation in your relationship. While every marriage has challenges, your connection appears resilient. Keep nurturing your bond through communication and mutual understanding."
};
const results_frensh = {
    divorce: "D'après vos réponses, il y a des signes de défis importants dans votre relation. Il pourrait être bénéfique de chercher des conseils professionnels ou d'avoir des discussions ouvertes avec votre partenaire sur l'avenir de votre mariage.",
    no_divorce: "Vos réponses suggèrent une base solide dans votre relation. Bien que chaque mariage ait ses défis, votre lien semble résilient. Continuez à entretenir votre relation par la communication et la compréhension mutuelle."
};

const results_arabic = {
    divorce: "استنادًا إلى إجاباتك، هناك مؤشرات على تحديات كبيرة في علاقتك. قد يكون من المفيد طلب استشارة مهنية أو إجراء مناقشات مفتوحة مع شريكك حول مستقبل زواجكما.",
    no_divorce: "تشير إجاباتك إلى وجود أساس قوي في علاقتك. رغم أن كل زواج يواجه تحديات، إلا أن ارتباطكما يبدو متينًا. استمر في تعزيز علاقتكما من خلال التواصل والتفاهم المتبادل."
};

const divorce_prediction_english = 'Herma Predicts';
const divorce_prediction_frensh = 'Herma Prédit';
const divorce_prediction_arabic = 'هيرما يتوقع';

const by_english = 'By ';
const by_frensh = 'Par ';
const by_arabic = 'بنسبة ';

const divorce_stable_english = ['Divorce', 'Stable Relationship'];
const divorce_stable_frensh = ['Divorce', 'Relation stable'];
const divorce_stable_arabic = ['الطلاق', 'علاقة مستقرة'];

const welcome_user_english = "I'm here to help you gain insights into your relationship dynamics. Let's begin by assessing your responses to a series of statements. Answer honestly to receive a personalized analysis. 💡";
const welcome_user_frensh = "Je suis là pour vous aider à mieux comprendre la dynamique de votre relation. Commençons par évaluer vos réponses à une série d'affirmations. Répondez honnêtement pour recevoir une analyse personnalisée. 💡";
<<<<<<< HEAD
const welcome_user_arabic = "أنا هنا لمساعدتك في فهم ديناميكيات علاقتك. لنبدأ بتقييم إجاباتك على سلسلة من العبارات. أجب بصدق للحصول على تحليل مخصص. 💡";
=======
const welcome_user_arabic = "أنا هنا لمساعدتك في فهم ديناميكيات علاقتك. لنبدأ بتقييم إجاباتك على سلسلة من العبارات. أجب بصدق للحصول على تحليل مخصص. 💡";
>>>>>>> c0176bb5600585b035600a1639c6eccda637d388
