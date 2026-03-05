import { useState, useMemo } from "react";

const raw = [
  // ELA / Reading / Writing
  { title: "5th Grade STAAR Reading Practice", id: "cm2yxek2n048u100usy8jqfoq", subject: "ELA", grade: "5th" },
  { title: "5th Grade STAAR Reading Practice", id: "clt3ggrxi0mda9x7g4c37jru6", subject: "ELA", grade: "5th" },
  { title: "5th Grade STAAR Reading Practice", id: "cm771i9e401bz5m5zp9fsco9k", subject: "ELA", grade: "5th" },
  { title: "5th Grade STAAR Reading Practice", id: "cm6xp0pyt07zn74z135ga4xpm", subject: "ELA", grade: "5th" },
  { title: "5th Grade STAAR Reading Practice", id: "cm98kl1mf03dlq34fan5xgltm", subject: "ELA", grade: "5th" },
  { title: "5th Grade STAAR Reading Practice", id: "cm98kz4fb03pdk5lwa64x8413", subject: "ELA", grade: "5th" },
  { title: "5th Grade STAAR Reading Practice", id: "cm9bxhzl500bsx33fencbacce", subject: "ELA", grade: "5th" },
  { title: "5th Grade STAAR Reading Practice (Florida BEST)", id: "cmdg6sz0c02yfhz5jgbvjuz7h", subject: "ELA", grade: "5th" },
  { title: "5th Grade STAAR Based Editing Practice", id: "cm477kpbe0f5sx7y85beocr6i", subject: "ELA", grade: "5th" },
  { title: "5th Grade STAAR Based Revising Practice", id: "cm47b12a106d67c7orstexg2q", subject: "ELA", grade: "5th" },
  { title: "4th Grade STAAR Reading Practice", id: "cm8ql2i9d00mnk1fm8segva3c", subject: "ELA", grade: "4th" },
  { title: "4th Grade STAAR Reading Practice", id: "cm8qlee8p00mqbog4d97e8sp2", subject: "ELA", grade: "4th" },
  { title: "4th Grade STAAR Reading Practice - CA CORE", id: "cmebasydw00rnfmutjwh6mind", subject: "ELA", grade: "4th" },
  { title: "3rd Grade ELAR STAAR Test", id: "cm2p2kan5092f1qpt22qa08uc", subject: "ELA", grade: "3rd" },
  { title: "3rd Grade STAAR Prep", id: "clv1fnf0w003p548eiac3uc0g", subject: "ELA", grade: "3rd" },
  { title: "6th Grade STAAR Practice", id: "cm6e0d0jl05lk207t8q78aaoi", subject: "ELA", grade: "6th" },
  { title: "6th Grade Reading STAAR Review", id: "cmj7bxoej00nq1kjguedozosh", subject: "ELA", grade: "6th" },
  { title: "7th Grade ELAR STAAR Prep", id: "cmm9dlglu00y940q794a21ekr", subject: "ELA", grade: "7th" },
  { title: "7th Grade ELAR STAAR Prep", id: "cmm9fijuv011qaa9d6qp0giqq", subject: "ELA", grade: "7th" },
  { title: "STAAR Revise & Edit Practice 8th Grade", id: "cmhz3uixw000acaxc4pdkmenb", subject: "ELA", grade: "8th" },
  { title: "STAAR Revise & Edit Practice 8th Grade", id: "cmk1l599r0996jcqsgiginziw", subject: "ELA", grade: "8th" },
  { title: "STAAR Revise & Edit Practice 8th Grade", id: "cml9xo27f00dycoprm1c9cnuz", subject: "ELA", grade: "8th" },
  { title: "STAAR English 1 Review", id: "clt912k140a1tx8s0dz0dhe2i", subject: "ELA", grade: "HS" },
  { title: "STAAR English 1", id: "cmfcuy3cz00f311alqci20bw6", subject: "ELA", grade: "HS" },
  { title: "STAAR English I Escape Room", id: "cmlsbnwq70021108r0zmnsrci", subject: "ELA", grade: "HS" },
  { title: "STAAR English I Escape Room", id: "cmls8onk7013k2z6ub6bq8b3m", subject: "ELA", grade: "HS" },
  { title: "STAAR English I Escape Room", id: "cmm2f7xin00jcrsls12vy3srs", subject: "ELA", grade: "HS" },
  { title: "STAAR English II Escape Room", id: "cmlsdj2ji00da8kpfc9vcfvs5", subject: "ELA", grade: "HS" },
  { title: "STAAR English II Escape Room", id: "cmm2f7vbp00dxfobrsasztmlc", subject: "ELA", grade: "HS" },
  { title: "STAAR Writing Feedback English I", id: "cm7j6hf6508ur56e92rulkbzg", subject: "ELA", grade: "HS" },
  { title: "STAAR Writing Feedback English I", id: "cm7xuybdj0b72xfpcimw174ox", subject: "ELA", grade: "HS" },
  { title: "STAAR Writing Feedback English I (w/ Pre-Reading)", id: "cm7jc03z00dhyolcwauwlio1n", subject: "ELA", grade: "HS" },
  { title: "STAAR Writing Feedback English I (w/ Pre-Reading)", id: "cm7m1rxof04sljllnupran90j", subject: "ELA", grade: "HS" },
  { title: "STAAR Writing Feedback English I (w/ Pre-Reading)", id: "cm7oyxzz003sp107qv8edznep", subject: "ELA", grade: "HS" },
  { title: "STAAR Writing Feedback English I (w/ Pre-Reading)", id: "cm7jg7hxi0gr8jfiawprlcqo7", subject: "ELA", grade: "HS" },
  { title: "STAAR Writing Feedback English II (w/ Pre-Reading)", id: "cm7jhes8f0hslcqk3c82qeyeq", subject: "ELA", grade: "HS" },
  { title: "Grading the 2024 STAAR English II ECR", id: "cm7j30mwa06rgjjblwxpsvkfx", subject: "ELA", grade: "HS" },
  { title: "Grading the 2024 STAAR English II ECR", id: "cm7j89g0909k7kwjht0hnbyda", subject: "ELA", grade: "HS" },
  { title: "Grading the 2024 STAAR English II ECR", id: "cmb9btr980128byho4czpx483", subject: "ELA", grade: "HS" },
  { title: "High School STAAR RLA Extended Constructed Response", id: "cm2ulvltg00fkp6j2u4qy26o8", subject: "ELA", grade: "HS" },
  { title: "High School STAAR RLA Extended Constructed Response", id: "cm2urquxp02vzhpxdbc3hwf7s", subject: "ELA", grade: "HS" },
  { title: "High School STAAR RLA Extended Constructed Response", id: "cm2urr9fx009f8ednyeuspw6u", subject: "ELA", grade: "HS" },
  { title: "High School STAAR RLA Extended Constructed Response", id: "cm2urrbgd0e11to0hzajge8h0", subject: "ELA", grade: "HS" },
  { title: "High School STAAR RLA ECR COPY", id: "cm37unf3t03ytsxg9ylw3n8gc", subject: "ELA", grade: "HS" },
  { title: "STAAR E2 Essay Grader", id: "cm22564ox011ehuxjgjvjk3y7", subject: "ELA", grade: "HS" },
  { title: "English EOC 2 STAAR Prep", id: "cmlv7y8sm00b1i8ylr5yj1f67", subject: "ELA", grade: "HS" },
  { title: "STAAR ELAR EOC", id: "cmm9qblol005pvr4k9jq5bmr3", subject: "ELA", grade: "HS" },
  { title: "English 1 and 2 STAAR Stamina Practice", id: "cmhw9mbpx000ewtidezgkgty6", subject: "ELA", grade: "HS" },
  { title: "STAAR Prep for English 1 and 2 - Short Passage", id: "cmhw86er200epfioff3eh6vqm", subject: "ELA", grade: "HS" },
  { title: "Revising and Editing for English II STAAR", id: "cm7c7troi074gsxv66p6isqtz", subject: "ELA", grade: "HS" },
  { title: "Revising the 2023 STAAR ECR", id: "cm3j4vw750szcr5kn7mqk3bfg", subject: "ELA", grade: "General" },
  { title: "Revising the 2023 STAAR ECR", id: "cm3qdn9nh0pd6lhnzr5hip2xw", subject: "ELA", grade: "General" },
  { title: "Revising the 2023 STAAR ECR", id: "cm3rn9hrp0htn7n91u66hlbx7", subject: "ELA", grade: "General" },
  { title: "Revising the 2023 STAAR ECR", id: "cm5y7d4cq00uu17fx7fflb4bb", subject: "ELA", grade: "General" },
  { title: "Revising the 2023 STAAR ECR", id: "cm64kq9dh007911sxr7j07v05", subject: "ELA", grade: "General" },
  { title: "Mike - Revising the 2023 STAAR ECR", id: "cm5fiil3g001orzydb7tdytoh", subject: "ELA", grade: "General" },
  { title: "Mike - Revising the 2023 STAAR ECR", id: "cm6o5s4mz004clu1up4gsxuhh", subject: "ELA", grade: "General" },
  { title: "Revising the 2023 STAAR ECR - Mike", id: "cm4c9t81n01c0jsehr13avpxl", subject: "ELA", grade: "General" },
  { title: "Revising the STAAR ECR Test", id: "cm5lk3zg109j6mt7g5692u7hy", subject: "ELA", grade: "General" },
  { title: "Revising the STAAR ECR Test", id: "cm64krtt50rhin0g2k5xajvtl", subject: "ELA", grade: "General" },
  { title: "Revising the STAAR ECR (21 Chump Street)", id: "cmfx3psp2006cbpr4vaes6zgy", subject: "ELA", grade: "General" },
  { title: "Revise and Edit - 2026 STAAR Practice", id: "cmlejqace03y7up1azo2xe2vh", subject: "ELA", grade: "General" },
  { title: "Revise and Edit - 2026 STAAR Practice", id: "cmlejq9oj00qx13yrsscy5oz5", subject: "ELA", grade: "General" },
  { title: "STAAR Revise & Edit Practice", id: "cm3hfi4y103exn4fict5b0xj3", subject: "ELA", grade: "General" },
  { title: "STAAR Revise & Edit Practice", id: "cmksk5eqk01k23slpbad7vfz0", subject: "ELA", grade: "General" },
  { title: "STAAR Revise & Edit Practice", id: "cmlsm4l4600ekz66ay83gbpxk", subject: "ELA", grade: "General" },
  { title: "STAAR Revise & Edit Practice", id: "cmksk2g8v01o0wgnh6emchmrv", subject: "ELA", grade: "General" },
  { title: "STAAR SIM ECR", id: "cmlk7467100bssqxw3bwozwgh", subject: "ELA", grade: "General" },
  { title: "STAAR ECR Practice", id: "cm8sxjucy04of6cca7ueb7rwu", subject: "ELA", grade: "General" },
  { title: "STAAR ECR- Self Check Coach", id: "cml8dp94e00jtg6159tcrexvs", subject: "ELA", grade: "General" },
  { title: "STAAR ECR/SCR Scoring Assistant", id: "cmit1zfi900xc14rnxqm1mqoq", subject: "ELA", grade: "General" },
  { title: "STAAR ECR/SCR Scoring Assistant", id: "cmja7e0w000trnme6ykvoo769", subject: "ELA", grade: "General" },
  { title: "STAAR SCR Writing Feedback", id: "cmkmrtbcc00us2brj3htzfk2b", subject: "ELA", grade: "General" },
  { title: "STAAR Short Constructed Responses", id: "cmksp3a1r01pvbfmaomu6ukfc", subject: "ELA", grade: "General" },
  { title: "STAAR Essay Grader", id: "cmiow1xl201yr37fqvduds80t", subject: "ELA", grade: "General" },
  { title: "STAAR Essay Scorer", id: "cm7kuja080ch0t8i3ne6rspk3", subject: "ELA", grade: "General" },
  { title: "STAAR Essay Writing Feedback", id: "cmhc6b8o700dk6evm2ygfhk07", subject: "ELA", grade: "General" },
  { title: "STAAR Essay Review", id: "cm9c4j15000mg12gum5weak53", subject: "ELA", grade: "General" },
  { title: "STAAR English Grader", id: "cm5y1zn6k03yxk05pcxa98nre", subject: "ELA", grade: "General" },
  { title: "STAAR Writing Practice", id: "cmiq9oqm4028pzeeqc1jdo6yn", subject: "ELA", grade: "General" },
  { title: "STAAR Writing Feedback Argumentative/Opinion", id: "cmhdl0qtl000s8cyyxdkb7qy6", subject: "ELA", grade: "General" },
  { title: "Writing Feedback for STAAR Argument", id: "cmj7em94j01dh6hdoi0jof53t", subject: "ELA", grade: "General" },
  { title: "STAAR Editing Practice", id: "cltx57uq40pc9wc2a64beviwz", subject: "ELA", grade: "General" },
  { title: "STAAR Editing Practice", id: "cmm5pqo8r007amfbqeezyl611", subject: "ELA", grade: "General" },
  { title: "STAAR Editing Practice", id: "cmj1v2w1n00x4yu6wypnjze73", subject: "ELA", grade: "General" },
  { title: "Editing STAAR Practice", id: "cmm9j3b1h00btwz3e09h2dqya", subject: "ELA", grade: "General" },
  { title: "STAAR Comma Practice", id: "cm7ovwhys02fo3nd7672psnyo", subject: "ELA", grade: "General" },
  { title: "STAAR Review: Combining Sentences with FANBOYS", id: "cm8lus11w00os141d4kozowjw", subject: "ELA", grade: "General" },
  { title: "Revision Practice for STAAR", id: "cmm9hn62s0063ki1yky00h346", subject: "ELA", grade: "General" },
  { title: "Revision and Editing Prep (STAAR)", id: "clt4wjg951k4v3t2cwia9j1u0", subject: "ELA", grade: "General" },
  { title: "STAAR Rubric Breakdown", id: "cmkr24y2q00sqys3zs39paghe", subject: "ELA", grade: "General" },
  { title: "STAAR Rubric Breakdown", id: "cmkr67x26002a4td5io6hlftx", subject: "ELA", grade: "General" },
  { title: "STAAR Rubric Breakdown", id: "cmkr7jm8t007x759zuxvpdo7q", subject: "ELA", grade: "General" },
  { title: "Rubric Breakdown - STAAR Essays", id: "cmkqz8acv00aef0ssgjo76snd", subject: "ELA", grade: "General" },
  { title: "Rubric Breakdown - STAAR Essays", id: "cmkr68yf2001y101utckskfxw", subject: "ELA", grade: "General" },
  { title: "Rubric Breakdown - STAAR Essays", id: "cmkr8ekqr00bjgi0hks1dv2oz", subject: "ELA", grade: "General" },
  { title: "Rubric Breakdown - STAAR Essays", id: "cmkrdp2w500c1xamqsen0ycjf", subject: "ELA", grade: "General" },
  { title: "[DAEP/Absent] Rubric Breakdown - STAAR Essays", id: "cmkqz9pi700cai6mwz012ysue", subject: "ELA", grade: "General" },
  { title: "STAAR 6-8 Rubric for ECRs", id: "cmizg0yvt00v8esqw18bbilze", subject: "ELA", grade: "General" },
  { title: "Essay Scoring for STAAR ECR Passages", id: "cm7wekigg0llcohhum2ecnagg", subject: "ELA", grade: "General" },
  { title: "ECR - Interim STAAR", id: "cmkmtdqpw01567jorqie9ozxg", subject: "ELA", grade: "General" },
  { title: "ECR - STAAR Rubric", id: "cmkqyl49g02b91nr4xt6jtbq6", subject: "ELA", grade: "General" },
  { title: "Essay Grader English 1 STAAR Sim", id: "cmlk9h0dd00od12x8d18etgri", subject: "ELA", grade: "General" },
  { title: "Essay Grader English 1 STAAR Sim", id: "cmlk9h4re00on12x82pamlsw5", subject: "ELA", grade: "General" },
  { title: "STAAR Vocab Escape Room", id: "cmklf0rcs0cobu6g4nubacg8r", subject: "ELA", grade: "General" },
  { title: "STAAR Vocabulary (Evaluate and Support)", id: "cmgs437o6001g1qwx6eno3ek4", subject: "ELA", grade: "General" },
  { title: "STAAR Vocabulary (Interpret, Infer)", id: "cmgqlkjdl00m0vyw18s7plrqq", subject: "ELA", grade: "General" },
  { title: "STAAR Vocabulary (Connotation, Denotation)", id: "cmgr37g5z003qb4igmhyv76ze", subject: "ELA", grade: "General" },
  { title: "STAAR Vocabulary (Thesis, Theme)", id: "cmgr36kko003z4a6iwlegg9fv", subject: "ELA", grade: "General" },
  { title: "STAAR Vocabulary (Tone, Mood)", id: "cmgr36xhp005s1v0kj71n8zue", subject: "ELA", grade: "General" },
  { title: "Greek and Latin Roots - STAAR", id: "cmls6369h00mgpwjcvx9dsqix", subject: "ELA", grade: "General" },
  { title: "STAAR Power - Reading Activity Generator", id: "cmhzc2z3y000j135phrlv9qpu", subject: "ELA", grade: "General" },
  { title: "STAAR Drama Review", id: "cmm5r6kv1008eg2zxabczik5z", subject: "ELA", grade: "General" },
  { title: "STAAR Fiction Practice", id: "cmm5qx3s200a411xfa33szbqk", subject: "ELA", grade: "General" },
  { title: "STAAR Poetry Review", id: "cmm5qgtjz009gmfbqwkwhueag", subject: "ELA", grade: "General" },
  { title: "Informational Texts STAAR Review", id: "cmm5rh2jq006z140yzghm7vba", subject: "ELA", grade: "General" },
  { title: "Argumentative STAAR Review", id: "cmm5sduht00cx6d36rqfqh7pl", subject: "ELA", grade: "General" },
  { title: "STAAR Question Decoding", id: "cmkbdgaw20111zmucxr04hnmj", subject: "ELA", grade: "General" },
  { title: "STAAR Question Decoding", id: "cmkbgdve900am76yonws568sa", subject: "ELA", grade: "General" },
  { title: "STAAR Question Decoding", id: "cmkbhyn80003q168lkvmrfsyd", subject: "ELA", grade: "General" },
  { title: "STAAR Question Decoding", id: "cml6vxapa0023dg7niiyvo5dx", subject: "ELA", grade: "General" },
  { title: "STAAR Question Decoding 1/20", id: "cmkmw0oh1004xga3k4fu9q4eq", subject: "ELA", grade: "General" },
  { title: "STAAR Question Decoding English Pt 1", id: "cmkbht0ii001apnu6do45hnox", subject: "ELA", grade: "General" },
  { title: "STAAR Question Decoding English Pt 2", id: "cmkbhxxzv0045gcyhgznnj8p7", subject: "ELA", grade: "General" },
  { title: "STAAR Question Decoding English Pt 3", id: "cmkbhxnt5003lhpfl8n9wdetu", subject: "ELA", grade: "General" },
  { title: "STAAR Question Decoding Pt 2", id: "cmkbhw4gn003e6rs32kxcj2rj", subject: "ELA", grade: "General" },
  { title: "STAAR Questions Decoding English Part 1", id: "cmkbo4hvo00189910bw7077kz", subject: "ELA", grade: "General" },
  { title: "STAAR Questions Decoding English Pt 2", id: "cmkbo5j52000uwzey7cjkarhn", subject: "ELA", grade: "General" },
  { title: "STAAR QUESTION DECODE", id: "cmkbezkc7017rzqa6cw1ud6q0", subject: "ELA", grade: "General" },
  { title: "STAAR QUESTIONING", id: "cmkmz5h3w00o2krqgwdxpt52a", subject: "ELA", grade: "General" },
  { title: "Monday - STAAR Question Breakdown", id: "cmk4a35gb0178trsw5qbixppj", subject: "ELA", grade: "General" },
  { title: "Sound of the Lark STAAR Prep Essay", id: "cm8q12htj04kljnxvovest77b", subject: "ELA", grade: "General" },
  { title: "The Gift of Rhyme - 2021 STAAR Passage", id: "cltxvpby7001uavlh1mw3q1cs", subject: "ELA", grade: "General" },
  { title: "\"Fix It to Score It: STAAR Revising & Editing Bootcamp\"", id: "cmltu52hw00k6bpgnwjigigbc", subject: "ELA", grade: "General" },
  { title: "\"Prove It or Lose It: Mastering STAAR Text Evidence\"", id: "cmltu2k6i00i8sr8gfamnivap", subject: "ELA", grade: "General" },
  { title: "NEW CER - STAAR Style", id: "cmfq7vo6q00n1wawi22bp3p4p", subject: "ELA", grade: "General" },
  { title: "Literary Theme Park Jury: STAAR Edition", id: "cmm2dvc4300bemgac068tk906", subject: "ELA", grade: "General" },
  { title: "STAAR SIM Bot", id: "cm7m7qlcd000q7f9f6ie264ym", subject: "ELA", grade: "General" },
  { title: "STAAR READING", id: "cltyumljy01x4ear1rkanpoaw", subject: "ELA", grade: "General" },
  { title: "STAAR Reading", id: "cmkpoydgf010rsen8j6ku58f9", subject: "ELA", grade: "General" },
  { title: "Reading STAAR Practice", id: "cm91dn3ye01qdbyx51779yui9", subject: "ELA", grade: "General" },
  { title: "ELA STAAR practice 24/25", id: "cm5vt9wh00026z9e67jeah5p9", subject: "ELA", grade: "General" },
  { title: "STAAR Prompt", id: "cmcxljgah000ovkmr7ldo1dpn", subject: "ELA", grade: "General" },
  { title: "STAAR Practice Essay - Playing with AI in NSP", id: "cm8m2qu03016qcounldn7le3p", subject: "ELA", grade: "General" },

  // Math
  { title: "5th Grade STAAR Practice Math", id: "clt4sfhlt1dbx9x7gyyq2c71f", subject: "Math", grade: "5th" },
  { title: "5th Math STAAR Tutor", id: "cm7nqsjkh09n310oxldcw3ogx", subject: "Math", grade: "5th" },
  { title: "5th Grade Math STAAR Space", id: "cmklb82jf00sk5vgz5bkzq97m", subject: "Math", grade: "5th" },
  { title: "4th grade STAAR Math Practice", id: "cm73jy57i002pj5taqx65wtb9", subject: "Math", grade: "4th" },
  { title: "4th Math STAAR Tutor", id: "cm7nqnqet09iobeo2mil3txk4", subject: "Math", grade: "4th" },
  { title: "3rd Grade Math STAAR", id: "cm9sw4lg208n87ry8kqelopee", subject: "Math", grade: "3rd" },
  { title: "3rd Grade Math STAAR", id: "cmkldvump02j177n8ezigl9ja", subject: "Math", grade: "3rd" },
  { title: "3rd Math STAAR Tutor", id: "cm7nqiz07094s6cnt9grqum0b", subject: "Math", grade: "3rd" },
  { title: "6th Grade Math STAAR Prep", id: "cm97d5jmj08ifqdqg5tozm6ik", subject: "Math", grade: "6th" },
  { title: "Linear STAAR Review", id: "cm93a7sf5000n13bn5ajxnudr", subject: "Math", grade: "General" },
  { title: "MATH STAAR INTERVENTION", id: "cmk74c65v00d3e7kwa58kv0be", subject: "Math", grade: "General" },
  { title: "STAAR mini assessment generator", id: "cm8g22ola04k4ofvrer9f0u8z", subject: "Math", grade: "General" },
  { title: "STAAR Question Decoding Math", id: "cmkbhncp0002712q4ey4ua25t", subject: "Math", grade: "General" },

  // Science
  { title: "STAAR Practice 5th Grade Science", id: "clt4qcz821ago2w0z2t77fhhl", subject: "Science", grade: "5th" },
  { title: "STAAR Practice 5th Grade Science", id: "cm8xarcp907k1142n2go9tkuc", subject: "Science", grade: "5th" },
  { title: "STAAR Practice 5th Grade Science", id: "cm8xb1o5n07l310mu6zzv7eds", subject: "Science", grade: "5th" },
  { title: "5th Grade STAAR Science Review", id: "cmkealkbi001v195rcz28fqzm", subject: "Science", grade: "5th" },
  { title: "5th Grade STAAR Science Review", id: "cmlb1ttmo02kbnurwyfk7c94t", subject: "Science", grade: "5th" },
  { title: "5th Science STAAR Tutor", id: "cm7nqyni609rp10oxq40rbqv4", subject: "Science", grade: "5th" },
  { title: "5th Science STAAR Tutor", id: "cm7nxwdxh0cj5rt9lrea6fs3w", subject: "Science", grade: "5th" },
  { title: "5th Science STAAR Tutor", id: "cmhig4by1005u120h36w25c6t", subject: "Science", grade: "5th" },
  { title: "5th Science STAAR Tutor", id: "cm84ndmmm0g4upe0o60rfr3ly", subject: "Science", grade: "5th" },
  { title: "5th Science STAAR Tutor", id: "cm84ns5br0gavz8bl2pcr5duu", subject: "Science", grade: "5th" },
  { title: "5th Science STAAR Expert", id: "cm825fdna01nhwb96i86yug0j", subject: "Science", grade: "5th" },
  { title: "5th Science STAAR Wars", id: "cluverhmf00i063509yyrwfnb", subject: "Science", grade: "5th" },
  { title: "Easter Hopping into 5th Science STAAR", id: "cm82evcjg028vsum7az7vq5y8", subject: "Science", grade: "5th" },
  { title: "8th Grade Science STAAR Prep", id: "cmc3ism2d00p34341v3lkiqo8", subject: "Science", grade: "8th" },
  { title: "8th Grade Science STAAR Prep", id: "cmggotr1t02xi11vru5dtgeb3", subject: "Science", grade: "8th" },
  { title: "8th Grade Science STAAR Prep", id: "cmggtqe72006bm4g3ss4s96du", subject: "Science", grade: "8th" },
  { title: "8th Grade Science STAAR Prep", id: "cmggtultf004zcri9zzqjnukv", subject: "Science", grade: "8th" },
  { title: "8th Grade Science STAAR Prep", id: "cmh0o0251008t13k62wzymw8e", subject: "Science", grade: "8th" },
  { title: "8th grade Science STAAR prep", id: "cmlqrz72m00yhrs4giy3qnhu9", subject: "Science", grade: "8th" },
  { title: "8th staar science prep", id: "cm7v0p5en0bedkonkrvgw2xs5", subject: "Science", grade: "8th" },
  { title: "STAAR - 8th Science Review Game 24-25", id: "cm8z7tm9i00p9rm88dxhxyybo", subject: "Science", grade: "8th" },
  { title: "STAAR - 8th Science Review Game", id: "cm7uylxrv0ai8oid6ldbs2pnw", subject: "Science", grade: "8th" },
  { title: "Biology STAAR Review", id: "cm84oq5fb0gjb66qlukkhqokv", subject: "Science", grade: "HS" },
  { title: "Biology STAAR Review", id: "cm8nhma800ajwix2nxl8zywip", subject: "Science", grade: "HS" },
  { title: "Biology STAAR Review", id: "cmlqtg0qv016trs4gvesmiewn", subject: "Science", grade: "HS" },
  { title: "BIOLOGY STAAR REVIEW", id: "cm84rx3ul0ihe98yx95a7981a", subject: "Science", grade: "HS" },
  { title: "Biology STAAR Tutor", id: "cm84th3p60k9zeglkf7ffta2t", subject: "Science", grade: "HS" },
  { title: "Biology STAAR SCR Editing and Revision Coach", id: "cmkqzeb3q00cnjd2zgngtjjc7", subject: "Science", grade: "HS" },
  { title: "Biology STAAR SCR Editing and Revision Coach", id: "cmkr8j5qc00be759zguoiybdo", subject: "Science", grade: "HS" },
  { title: "Biology STAAR SCR Editing and Revision Coach", id: "cmkq2iks9006yd5d4unzc6q6i", subject: "Science", grade: "HS" },
  { title: "Biology STAAR SCR Editing and Revision Coach", id: "cml8adj1j01g29der9x7t3xt7", subject: "Science", grade: "HS" },
  { title: "Biology STAAR", id: "cmfzil4p001avkdq6agl4703k", subject: "Science", grade: "HS" },
  { title: "STAAR Science Buddy 🌟🔬", id: "cm8rtfcnf04e09yhetq0mmgrh", subject: "Science", grade: "General" },
  { title: "Science STAAR Wars", id: "cluvcn4w8016pvheajw0mfixz", subject: "Science", grade: "General" },
  { title: "STAAR Question Decoding Science Pt 1", id: "cmkbi3vq0004b168lj2hcrlxc", subject: "Science", grade: "General" },
  { title: "STAAR Questions Decoding Science Pt 1", id: "cmkbo1ky8000tl601qil7tk67", subject: "Science", grade: "General" },
  { title: "STAAR Question Decoding Science Pt 2", id: "cmkbi7oiy003vlnwb7kgizz4u", subject: "Science", grade: "General" },
  { title: "STAAR Questions Decoding Science Pt 2", id: "cmkbo2ydd00128xgfio181vph", subject: "Science", grade: "General" },

  // Social Studies / History
  { title: "Blitz! US History STAAR Review", id: "cm7urlz5k066jvll9jj1z6kzd", subject: "Social Studies", grade: "HS" },
  { title: "Blitz! US History STAAR Review", id: "cm83fbk8y08a9xs99o8y4d3qv", subject: "Social Studies", grade: "HS" },
  { title: "8th-grade US History STAAR study tool", id: "cmesnxbwy002q8y7mtqxwwd3a", subject: "Social Studies", grade: "8th" },
  { title: "STAAR Questions Decoding Social Studies Pt 1", id: "cmkbnskso006hs1vm8lj47qxu", subject: "Social Studies", grade: "General" },
  { title: "STAAR Questions Decoding Social Studies Pt 2", id: "cmkbnt8k0007k10nllp9376mn", subject: "Social Studies", grade: "General" },

  // General / Multi-Subject
  { title: "STAAR Testing Strategies", id: "cm9743zu204nkkap3m1e0yguf", subject: "General", grade: "General" },
  { title: "STAAR Testing Strategies", id: "cma5ge5wb01od4q1dhabkjwsf", subject: "General", grade: "General" },
  { title: "4th - STAAR Testing Strategies", id: "cm97dfhyw08ju13bnljhe81fh", subject: "General", grade: "4th" },
  { title: "Overflow - STAAR Testing Strategies", id: "cm97fs6pm09ozll52lcq81d7j", subject: "General", grade: "General" },
  { title: "STAAR Review", id: "cm2jmue1w0b74lyzh6k0dby2x", subject: "General", grade: "General" },
  { title: "STAAR Review", id: "cm799e7ya05ag66odzsvqtr8j", subject: "General", grade: "General" },
  { title: "Super STAAR Review", id: "cm8ov8c9509621lxzuwbkoruk", subject: "General", grade: "General" },
  { title: "STAAR Reflection", id: "cm9udi4d80as6l96v54xhh64i", subject: "General", grade: "General" },
  { title: "STAAR Prep", id: "cluilmezw00m3zihst0tf4bt3", subject: "General", grade: "General" },
  { title: "STAAR Prep", id: "cmk5nayo200vuir8u7s9sbpg6", subject: "General", grade: "General" },
  { title: "STAAR AI Tutoring", id: "cm8de078p074m10ybiimxntms", subject: "General", grade: "General" },
  { title: "STAAR", id: "cltyuh3vc01v9zrh075qsqbfs", subject: "General", grade: "General" },
  { title: "STAAR", id: "cmkfr728t008kw28b5wv4bzny", subject: "General", grade: "General" },
  { title: "staar", id: "cmh50frhr001cr99wlg6785hx", subject: "General", grade: "General" },
  { title: "STAAR 2.0", id: "cmkfqfqx3002jgn4p66eyl1n6", subject: "General", grade: "General" },
  { title: "STAAR 2.0", id: "cmkptwwc700is1025iqk9n7d7", subject: "General", grade: "General" },
  { title: "STAAR 2.0 Breakdown", id: "cmkelhdti00a21wbtqyw1ighf", subject: "General", grade: "General" },
  { title: "AI STAAR", id: "cmk5tl5cc03by10znkira0mnh", subject: "General", grade: "General" },
  { title: "Practice STAAR Test 1", id: "cluvkz15o04vif25v67widpef", subject: "General", grade: "General" },
  { title: "Practice STAAR Reading Test", id: "clt4ipobz0y5p3t2cy0uxxc5i", subject: "General", grade: "General" },
  { title: "Practice STAAR Study Buddy", id: "cm7fcwl5y00nml25usgc5uf7c", subject: "General", grade: "General" },
  { title: "Mock STAAR Reading", id: "clsymdkmk1nmteh283gwi2p8z", subject: "General", grade: "General" },
  { title: "STAAR Test Prep #1", id: "cmkbeexcy011x1lo685zdzemo", subject: "General", grade: "General" },
  { title: "STAAR Test Training", id: "cmkldeuy4061k5jq1dalk421x", subject: "General", grade: "General" },
  { title: "STAAR Testing", id: "cm9058jxa0623rw1p7qxxzab4", subject: "General", grade: "General" },
  { title: "STAAR Success!", id: "cmliig9c002mfkugnm2lvwvsb", subject: "General", grade: "General" },
  { title: "STAAR Trivia", id: "cm8yo1he904t5gpop775lo5ba", subject: "General", grade: "General" },
  { title: "Junior High STAAR Adventure", id: "cmh0rdfxw00fvg4fc7wefe7lf", subject: "General", grade: "General" },
  { title: "Benchmark & STAAR Prep", id: "cml13woq500vp2y0313o47mn1", subject: "General", grade: "General" },
  { title: "Decoding STAAR", id: "cmkcrntzd02oqwc7jhu9dljql", subject: "General", grade: "General" },
  { title: "STAAR Question Work", id: "cmkbeivxv015pzqa62g4artdq", subject: "General", grade: "General" },
  { title: "staar review", id: "clurs0dcq00vqfb7mmqxvg1ge", subject: "General", grade: "General" },
  { title: "preparing for the STAAR", id: "clumnhud603jvlipcpd2vmqgy", subject: "General", grade: "General" },
  { title: "STUDY FOR STAAR TEST", id: "cmennvv8w011h9baqzwbkp4l4", subject: "General", grade: "General" },
  { title: "When I pass my STAAR", id: "clxi63kn505dgcfhmtc890t42", subject: "General", grade: "General" },
  { title: "Unit 1 STAAR Review", id: "cmm53d38w00uw12jik2gm8rk8", subject: "General", grade: "General" },
  { title: "STAAR Drama Review", id: "cmm5r6kv1008eg2zxabczik5z", subject: "General", grade: "General" },
  { title: "isttart write in a outstanding way ISTAART fellowship", id: "cmkhv5vd600m9ziockjpxvudn", subject: "General", grade: "General" },
];

const subjectConfig = {
  ELA: { color: "bg-blue-100 text-blue-800 border-blue-200", dot: "bg-blue-500", header: "bg-blue-600", light: "bg-blue-50" },
  Math: { color: "bg-green-100 text-green-800 border-green-200", dot: "bg-green-500", header: "bg-green-600", light: "bg-green-50" },
  Science: { color: "bg-purple-100 text-purple-800 border-purple-200", dot: "bg-purple-500", header: "bg-purple-600", light: "bg-purple-50" },
  "Social Studies": { color: "bg-amber-100 text-amber-800 border-amber-200", dot: "bg-amber-500", header: "bg-amber-600", light: "bg-amber-50" },
  General: { color: "bg-gray-100 text-gray-700 border-gray-200", dot: "bg-gray-500", header: "bg-gray-600", light: "bg-gray-50" },
};

const gradeOrder = ["3rd","4th","5th","6th","7th","8th","HS","General"];

export default function App() {
  const [search, setSearch] = useState("");
  const [activeSubject, setActiveSubject] = useState("All");
  const [activeGrade, setActiveGrade] = useState("All");
  const [expandedGroups, setExpandedGroups] = useState({});

  const subjects = ["All", "ELA", "Math", "Science", "Social Studies", "General"];
  const grades = ["All", "3rd", "4th", "5th", "6th", "7th", "8th", "HS", "General"];

  const filtered = useMemo(() => {
    return raw.filter(s => {
      const matchSearch = s.title.toLowerCase().includes(search.toLowerCase());
      const matchSubject = activeSubject === "All" || s.subject === activeSubject;
      const matchGrade = activeGrade === "All" || s.grade === activeGrade;
      return matchSearch && matchSubject && matchGrade;
    });
  }, [search, activeSubject, activeGrade]);

  const grouped = useMemo(() => {
    const g = {};
    for (const s of filtered) {
      const key = `${s.subject}|||${s.grade}`;
      if (!g[key]) g[key] = { subject: s.subject, grade: s.grade, items: [] };
      g[key].items.push(s);
    }
    return Object.values(g).sort((a, b) => {
      const si = subjects.indexOf(a.subject) - subjects.indexOf(b.subject);
      if (si !== 0) return si;
      return gradeOrder.indexOf(a.grade) - gradeOrder.indexOf(b.grade);
    });
  }, [filtered]);

  const toggleGroup = (key) => setExpandedGroups(p => ({ ...p, [key]: !p[key] }));

  const totalCount = filtered.length;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 px-6 py-8 shadow-lg">
        <h1 className="text-3xl font-bold text-white tracking-tight">SchoolAI STAAR Spaces Directory</h1>
        <p className="text-indigo-100 mt-1 text-sm">SchoolAI · {raw.length} Spaces across all subjects & grades</p>
      </div>

      {/* Filters */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm px-6 py-4">
        <div className="max-w-5xl mx-auto flex flex-col gap-3">
          <input
            type="text"
            placeholder="🔍  Search spaces..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Subject:</span>
            {subjects.map(s => (
              <button key={s} onClick={() => setActiveSubject(s)}
                className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${activeSubject === s ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-gray-600 border-gray-300 hover:border-indigo-400"}`}>
                {s}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Grade:</span>
            {grades.map(g => (
              <button key={g} onClick={() => setActiveGrade(g)}
                className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${activeGrade === g ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-gray-600 border-gray-300 hover:border-indigo-400"}`}>
                {g === "General" ? "Multi/General" : g === "HS" ? "High School" : `${g} Grade`}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-400">{totalCount} space{totalCount !== 1 ? "s" : ""} found</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-6 space-y-4">
        {grouped.length === 0 && (
          <div className="text-center py-16 text-gray-400 text-sm">No spaces match your filters.</div>
        )}
        {grouped.map(group => {
          const cfg = subjectConfig[group.subject];
          const key = `${group.subject}|||${group.grade}`;
          const isOpen = expandedGroups[key] !== false; // default open
          const gradeLabel = group.grade === "General" ? "Multi-Grade / General" : group.grade === "HS" ? "High School" : `${group.grade} Grade`;
          return (
            <div key={key} className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <button onClick={() => toggleGroup(key)}
                className={`w-full flex items-center justify-between px-5 py-3 ${cfg.header} text-white font-semibold text-sm hover:opacity-90 transition-opacity`}>
                <span className="flex items-center gap-2">
                  <span className="bg-white bg-opacity-20 rounded-md px-2 py-0.5 text-xs font-bold">{group.subject}</span>
                  <span>{gradeLabel}</span>
                  <span className="bg-white bg-opacity-20 rounded-full px-2 py-0.5 text-xs">{group.items.length}</span>
                </span>
                <span className="text-white text-lg">{isOpen ? "▲" : "▼"}</span>
              </button>
              {isOpen && (
                <div className={`${cfg.light} divide-y divide-gray-100`}>
                  {group.items.map(item => (
                    <a key={item.id} href={`https://app.schoolai.com/spaces/${item.id}`} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-2.5 hover:bg-white transition-colors group">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${cfg.dot}`}></span>
                      <span className="text-sm text-gray-700 group-hover:text-indigo-600 transition-colors flex-1">{item.title}</span>
                      <span className="text-xs text-gray-400 group-hover:text-indigo-400 transition-colors hidden sm:block">Open →</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
