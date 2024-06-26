import { DictionaryJsonMap } from '../types/resources.ts'

const dictionaryJsonMap = {
  "/2024HongBao_T1.json": () => require('../public/dicts/2024HongBao_T1.json'),
  "/2024HongBao_T2.json": () => require('../public/dicts/2024HongBao_T2.json'),
  "/4000_Essential_English_Words-meaning.json": () => require('../public/dicts/4000_Essential_English_Words-meaning.json'),
  "/4000_Essential_English_Words-sentence.json": () => require('../public/dicts/4000_Essential_English_Words-sentence.json'),
  "/BEC_2_T.json": () => require('../public/dicts/BEC_2_T.json'),
  "/BEC_3_T.json": () => require('../public/dicts/BEC_3_T.json'),
  "/BeiShiGaoZhong_10_T.json": () => require('../public/dicts/BeiShiGaoZhong_10_T.json'),
  "/BeiShiGaoZhong_11_T.json": () => require('../public/dicts/BeiShiGaoZhong_11_T.json'),
  "/BeiShiGaoZhong_1_T.json": () => require('../public/dicts/BeiShiGaoZhong_1_T.json'),
  "/BeiShiGaoZhong_2_T.json": () => require('../public/dicts/BeiShiGaoZhong_2_T.json'),
  "/BeiShiGaoZhong_3_T.json": () => require('../public/dicts/BeiShiGaoZhong_3_T.json'),
  "/BeiShiGaoZhong_4_T.json": () => require('../public/dicts/BeiShiGaoZhong_4_T.json'),
  "/BeiShiGaoZhong_5_T.json": () => require('../public/dicts/BeiShiGaoZhong_5_T.json'),
  "/BeiShiGaoZhong_6_T.json": () => require('../public/dicts/BeiShiGaoZhong_6_T.json'),
  "/BeiShiGaoZhong_7_T.json": () => require('../public/dicts/BeiShiGaoZhong_7_T.json'),
  "/BeiShiGaoZhong_8_T.json": () => require('../public/dicts/BeiShiGaoZhong_8_T.json'),
  "/BeiShiGaoZhong_9_T.json": () => require('../public/dicts/BeiShiGaoZhong_9_T.json'),
  "/CET4_T.json": () => require('../public/dicts/CET4_T.json'),
  "/CET6_T.json": () => require('../public/dicts/CET6_T.json'),
  "/Child_cpp.json": () => require('../public/dicts/Child_cpp.json'),
  "/Child_python_code.json": () => require('../public/dicts/Child_python_code.json'),
  "/Child_python_turtle_code.json": () => require('../public/dicts/Child_python_turtle_code.json'),
  "/ChuZhongluan_2_T.json": () => require('../public/dicts/ChuZhongluan_2_T.json'),
  "/DanCiDeJianFa_4.json": () => require('../public/dicts/DanCiDeJianFa_4.json'),
  "/DanCiDeJianFa_6.json": () => require('../public/dicts/DanCiDeJianFa_6.json'),
  "/DanCiDeMimi_1.json": () => require('../public/dicts/DanCiDeMimi_1.json'),
  "/DanCiDeMimi_2.json": () => require('../public/dicts/DanCiDeMimi_2.json'),
  "/DuckCircle_IELTS.json": () => require('../public/dicts/DuckCircle_IELTS.json'),
  "/Duolingo_Vocabulary_B1.json": () => require('../public/dicts/Duolingo_Vocabulary_B1.json'),
  "/Duolingo_Vocabulary_B2.json": () => require('../public/dicts/Duolingo_Vocabulary_B2.json'),
  "/Duolingo_Vocabulary_C1.json": () => require('../public/dicts/Duolingo_Vocabulary_C1.json'),
  "/EF_LEVEL_1.json": () => require('../public/dicts/EF_LEVEL_1.json'),
  "/EF_LEVEL_10.json": () => require('../public/dicts/EF_LEVEL_10.json'),
  "/EF_LEVEL_11.json": () => require('../public/dicts/EF_LEVEL_11.json'),
  "/EF_LEVEL_12.json": () => require('../public/dicts/EF_LEVEL_12.json'),
  "/EF_LEVEL_13.json": () => require('../public/dicts/EF_LEVEL_13.json'),
  "/EF_LEVEL_14.json": () => require('../public/dicts/EF_LEVEL_14.json'),
  "/EF_LEVEL_15.json": () => require('../public/dicts/EF_LEVEL_15.json'),
  "/EF_LEVEL_16.json": () => require('../public/dicts/EF_LEVEL_16.json'),
  "/EF_LEVEL_2.json": () => require('../public/dicts/EF_LEVEL_2.json'),
  "/EF_LEVEL_3.json": () => require('../public/dicts/EF_LEVEL_3.json'),
  "/EF_LEVEL_4.json": () => require('../public/dicts/EF_LEVEL_4.json'),
  "/EF_LEVEL_5.json": () => require('../public/dicts/EF_LEVEL_5.json'),
  "/EF_LEVEL_6.json": () => require('../public/dicts/EF_LEVEL_6.json'),
  "/EF_LEVEL_7.json": () => require('../public/dicts/EF_LEVEL_7.json'),
  "/EF_LEVEL_8.json": () => require('../public/dicts/EF_LEVEL_8.json'),
  "/EF_LEVEL_9.json": () => require('../public/dicts/EF_LEVEL_9.json'),
  "/English_II.json": () => require('../public/dicts/English_II.json'),
  "/GMAT_3_T.json": () => require('../public/dicts/GMAT_3_T.json'),
  "/GRE-computer-based-test.json": () => require('../public/dicts/GRE-computer-based-test.json'),
  "/GRE3000_3_T.json": () => require('../public/dicts/GRE3000_3_T.json'),
  "/GRE_3_T.json": () => require('../public/dicts/GRE_3_T.json'),
  "/GRE_equivalent.json": () => require('../public/dicts/GRE_equivalent.json'),
  "/GaoKaoZhenTiHeXinGaoPin.json": () => require('../public/dicts/GaoKaoZhenTiHeXinGaoPin.json'),
  "/GaoKao_3500.json": () => require('../public/dicts/GaoKao_3500.json'),
  "/GaoZhongluan_2_T.json": () => require('../public/dicts/GaoZhongluan_2_T.json'),
  "/HeQiong_IELTS.json": () => require('../public/dicts/HeQiong_IELTS.json'),
  "/IELTS9988wangyong.json": () => require('../public/dicts/IELTS9988wangyong.json'),
  "/IELTSKingLu807.json": () => require('../public/dicts/IELTSKingLu807.json'),
  "/IELTSLiuHongbo538.json": () => require('../public/dicts/IELTSLiuHongbo538.json'),
  "/IELTSVocabularyBible.json": () => require('../public/dicts/IELTSVocabularyBible.json'),
  "/IELTS_3_T.json": () => require('../public/dicts/IELTS_3_T.json'),
  "/IELTS_WANG_11.json": () => require('../public/dicts/IELTS_WANG_11.json'),
  "/IELTS_WANG_3.json": () => require('../public/dicts/IELTS_WANG_3.json'),
  "/IELTS_WANG_4.json": () => require('../public/dicts/IELTS_WANG_4.json'),
  "/IELTS_WANG_5.json": () => require('../public/dicts/IELTS_WANG_5.json'),
  "/IELTS_disorder.json": () => require('../public/dicts/IELTS_disorder.json'),
  "/IELTS_order.json": () => require('../public/dicts/IELTS_order.json'),
  "/IELTS_tinglichangjing.json": () => require('../public/dicts/IELTS_tinglichangjing.json'),
  "/JapVocabList.N1.json": () => require('../public/dicts/JapVocabList.N1.json'),
  "/JapVocabList.N1_zh.json": () => require('../public/dicts/JapVocabList.N1_zh.json'),
  "/JapVocabList.N2.json": () => require('../public/dicts/JapVocabList.N2.json'),
  "/JapVocabList.N2_zh.json": () => require('../public/dicts/JapVocabList.N2_zh.json'),
  "/JapVocabList.N3.json": () => require('../public/dicts/JapVocabList.N3.json'),
  "/JapVocabList.N3_zh.json": () => require('../public/dicts/JapVocabList.N3_zh.json'),
  "/JapVocabList.N4.json": () => require('../public/dicts/JapVocabList.N4.json'),
  "/JapVocabList.N4_zh.json": () => require('../public/dicts/JapVocabList.N4_zh.json'),
  "/JapVocabList.N5.json": () => require('../public/dicts/JapVocabList.N5.json'),
  "/JapVocabList.N5_zh.json": () => require('../public/dicts/JapVocabList.N5_zh.json'),
  "/Jap_High-Frequency_N1.json": () => require('../public/dicts/Jap_High-Frequency_N1.json'),
  "/Jap_High-Frequency_N2.json": () => require('../public/dicts/Jap_High-Frequency_N2.json'),
  "/Jap_High-Frequency_N3.json": () => require('../public/dicts/Jap_High-Frequency_N3.json'),
  "/Jap_High-Frequency_N4N5.json": () => require('../public/dicts/Jap_High-Frequency_N4N5.json'),
  "/Japanesebasicword.json": () => require('../public/dicts/Japanesebasicword.json'),
  "/Japanesebasicword_zh.json": () => require('../public/dicts/Japanesebasicword_zh.json'),
  "/KaoYanShanGuo_2023.json": () => require('../public/dicts/KaoYanShanGuo_2023.json'),
  "/KaoYan_2024.json": () => require('../public/dicts/KaoYan_2024.json'),
  "/KaoYan_3_T.json": () => require('../public/dicts/KaoYan_3_T.json'),
  "/Level4luan_2_T.json": () => require('../public/dicts/Level4luan_2_T.json'),
  "/Level8luan_2_T.json": () => require('../public/dicts/Level8luan_2_T.json'),
  "/Longman_Communication_3000.json": () => require('../public/dicts/Longman_Communication_3000.json'),
  "/Macmillan7000.json": () => require('../public/dicts/Macmillan7000.json'),
  "/Merriam_Webster_sVocabularyBuilder.json": () => require('../public/dicts/Merriam_Webster_sVocabularyBuilder.json'),
  "/NCE_1.json": () => require('../public/dicts/NCE_1.json'),
  "/NCE_2.json": () => require('../public/dicts/NCE_2.json'),
  "/NCE_3.json": () => require('../public/dicts/NCE_3.json'),
  "/NCE_4.json": () => require('../public/dicts/NCE_4.json'),
  "/Node-fs.json": () => require('../public/dicts/Node-fs.json'),
  "/Node-path.json": () => require('../public/dicts/Node-path.json'),
  "/Oxford3000.json": () => require('../public/dicts/Oxford3000.json'),
  "/Oxford5000.json": () => require('../public/dicts/Oxford5000.json'),
  "/OxfordVocabulary_juniorMiddleSH.json": () => require('../public/dicts/OxfordVocabulary_juniorMiddleSH.json'),
  "/PEPChuZhong7_1_T.json": () => require('../public/dicts/PEPChuZhong7_1_T.json'),
  "/PEPChuZhong7_2_T.json": () => require('../public/dicts/PEPChuZhong7_2_T.json'),
  "/PEPChuZhong8_1_T.json": () => require('../public/dicts/PEPChuZhong8_1_T.json'),
  "/PEPChuZhong8_2_T.json": () => require('../public/dicts/PEPChuZhong8_2_T.json'),
  "/PEPChuZhong9_1_T.json": () => require('../public/dicts/PEPChuZhong9_1_T.json'),
  "/PEPGaoZhong_10_T.json": () => require('../public/dicts/PEPGaoZhong_10_T.json'),
  "/PEPGaoZhong_11_T.json": () => require('../public/dicts/PEPGaoZhong_11_T.json'),
  "/PEPGaoZhong_1_T.json": () => require('../public/dicts/PEPGaoZhong_1_T.json'),
  "/PEPGaoZhong_2_T.json": () => require('../public/dicts/PEPGaoZhong_2_T.json'),
  "/PEPGaoZhong_3_T.json": () => require('../public/dicts/PEPGaoZhong_3_T.json'),
  "/PEPGaoZhong_4_T.json": () => require('../public/dicts/PEPGaoZhong_4_T.json'),
  "/PEPGaoZhong_5_T.json": () => require('../public/dicts/PEPGaoZhong_5_T.json'),
  "/PEPGaoZhong_6_T.json": () => require('../public/dicts/PEPGaoZhong_6_T.json'),
  "/PEPGaoZhong_7_T.json": () => require('../public/dicts/PEPGaoZhong_7_T.json'),
  "/PEPGaoZhong_8_T.json": () => require('../public/dicts/PEPGaoZhong_8_T.json'),
  "/PEPGaoZhong_9_T.json": () => require('../public/dicts/PEPGaoZhong_9_T.json'),
  "/PEPXiaoXue3_1_T.json": () => require('../public/dicts/PEPXiaoXue3_1_T.json'),
  "/PEPXiaoXue3_2_T.json": () => require('../public/dicts/PEPXiaoXue3_2_T.json'),
  "/PEPXiaoXue4_1_T.json": () => require('../public/dicts/PEPXiaoXue4_1_T.json'),
  "/PEPXiaoXue4_2_T.json": () => require('../public/dicts/PEPXiaoXue4_2_T.json'),
  "/PEPXiaoXue5_1_T.json": () => require('../public/dicts/PEPXiaoXue5_1_T.json'),
  "/PEPXiaoXue5_2_T.json": () => require('../public/dicts/PEPXiaoXue5_2_T.json'),
  "/PEPXiaoXue6_1_T.json": () => require('../public/dicts/PEPXiaoXue6_1_T.json'),
  "/PEPXiaoXue6_2_T.json": () => require('../public/dicts/PEPXiaoXue6_2_T.json'),
  "/PEP_SL_XiaoXue1_1_t.json": () => require('../public/dicts/PEP_SL_XiaoXue1_1_t.json'),
  "/PEP_SL_XiaoXue1_2_t .json": () => require('../public/dicts/PEP_SL_XiaoXue1_2_t .json'),
  "/PEP_SL_XiaoXue2_1_t.json": () => require('../public/dicts/PEP_SL_XiaoXue2_1_t.json'),
  "/PEP_SL_XiaoXue2_2_t.json": () => require('../public/dicts/PEP_SL_XiaoXue2_2_t.json'),
  "/PEP_SL_XiaoXue3_1_t.json": () => require('../public/dicts/PEP_SL_XiaoXue3_1_t.json'),
  "/PEP_SL_XiaoXue3_2_t.json": () => require('../public/dicts/PEP_SL_XiaoXue3_2_t.json'),
  "/PEP_SL_XiaoXue4_1_t.json": () => require('../public/dicts/PEP_SL_XiaoXue4_1_t.json'),
  "/PEP_SL_XiaoXue4_2_t.json": () => require('../public/dicts/PEP_SL_XiaoXue4_2_t.json'),
  "/PEP_SL_XiaoXue5_1_t.json": () => require('../public/dicts/PEP_SL_XiaoXue5_1_t.json'),
  "/PEP_SL_XiaoXue5_2_t.json": () => require('../public/dicts/PEP_SL_XiaoXue5_2_t.json'),
  "/PEP_SL_XiaoXue6_1_t.json": () => require('../public/dicts/PEP_SL_XiaoXue6_1_t.json'),
  "/PEP_SL_XiaoXue6_2_t.json": () => require('../public/dicts/PEP_SL_XiaoXue6_2_t.json'),
  "/PETS3-2023.json": () => require('../public/dicts/PETS3-2023.json'),
  "/PETS_3.json": () => require('../public/dicts/PETS_3.json'),
  "/PTE_Advanced_apeuni.json": () => require('../public/dicts/PTE_Advanced_apeuni.json'),
  "/PTE_Basic_apeuni.json": () => require('../public/dicts/PTE_Basic_apeuni.json'),
  "/PTE_FIB_L.json": () => require('../public/dicts/PTE_FIB_L.json'),
  "/PTE_FIB_R_junior.json": () => require('../public/dicts/PTE_FIB_R_junior.json'),
  "/PTE_FIB_R_senior.json": () => require('../public/dicts/PTE_FIB_R_senior.json'),
  "/PTE_Listening_apeuni.json": () => require('../public/dicts/PTE_Listening_apeuni.json'),
  "/PTE_Read_apeuni.json": () => require('../public/dicts/PTE_Read_apeuni.json'),
  "/PTE_WFD.json": () => require('../public/dicts/PTE_WFD.json'),
  "/PTE_junior.json": () => require('../public/dicts/PTE_junior.json'),
  "/PTE_senior.json": () => require('../public/dicts/PTE_senior.json'),
  "/ReadingExplorer3.json": () => require('../public/dicts/ReadingExplorer3.json'),
  "/SAT_3_T.json": () => require('../public/dicts/SAT_3_T.json'),
  "/SATen.json": () => require('../public/dicts/SATen.json'),
  "/SQL_statement_lower-case.json": () => require('../public/dicts/SQL_statement_lower-case.json'),
  "/SQL_statement_upper-case.json": () => require('../public/dicts/SQL_statement_upper-case.json'),
  "/TOEFL_3_T.json": () => require('../public/dicts/TOEFL_3_T.json'),
  "/TOEFL_ZhangHongYan.json": () => require('../public/dicts/TOEFL_ZhangHongYan.json'),
  "/TOEIC.json": () => require('../public/dicts/TOEIC.json'),
  "/Top1000VerbWords.json": () => require('../public/dicts/Top1000VerbWords.json'),
  "/Top1500NounWords.json": () => require('../public/dicts/Top1500NounWords.json'),
  "/Top250AdverbWords.json": () => require('../public/dicts/Top250AdverbWords.json'),
  "/Top500AdjectiveWords.json": () => require('../public/dicts/Top500AdjectiveWords.json'),
  "/Top50Prepositions.json": () => require('../public/dicts/Top50Prepositions.json'),
  "/Top60Pronouns.json": () => require('../public/dicts/Top60Pronouns.json'),
  "/WaiYanSheChuZhong_1-Volume-down.json": () => require('../public/dicts/WaiYanSheChuZhong_1-Volume-down.json'),
  "/WaiYanSheChuZhong_1-Volume-up.json": () => require('../public/dicts/WaiYanSheChuZhong_1-Volume-up.json'),
  "/WaiYanSheChuZhong_1_T.json": () => require('../public/dicts/WaiYanSheChuZhong_1_T.json'),
  "/WaiYanSheChuZhong_2-Volume-down.json": () => require('../public/dicts/WaiYanSheChuZhong_2-Volume-down.json'),
  "/WaiYanSheChuZhong_2-Volume-top.json": () => require('../public/dicts/WaiYanSheChuZhong_2-Volume-top.json'),
  "/WaiYanSheChuZhong_2_T.json": () => require('../public/dicts/WaiYanSheChuZhong_2_T.json'),
  "/WaiYanSheChuZhong_3-Volume-down.json": () => require('../public/dicts/WaiYanSheChuZhong_3-Volume-down.json'),
  "/WaiYanSheChuZhong_3-Volume-top.json": () => require('../public/dicts/WaiYanSheChuZhong_3-Volume-top.json'),
  "/WaiYanSheChuZhong_3_T.json": () => require('../public/dicts/WaiYanSheChuZhong_3_T.json'),
  "/WaiYanSheChuZhong_4-Volume-down.json": () => require('../public/dicts/WaiYanSheChuZhong_4-Volume-down.json'),
  "/WaiYanSheChuZhong_4-Volume-top.json": () => require('../public/dicts/WaiYanSheChuZhong_4-Volume-top.json'),
  "/WaiYanSheChuZhong_4_T.json": () => require('../public/dicts/WaiYanSheChuZhong_4_T.json'),
  "/WaiYanSheChuZhong_5-Volume-down.json": () => require('../public/dicts/WaiYanSheChuZhong_5-Volume-down.json'),
  "/WaiYanSheChuZhong_5-Volume-top.json": () => require('../public/dicts/WaiYanSheChuZhong_5-Volume-top.json'),
  "/WaiYanSheChuZhong_5_T.json": () => require('../public/dicts/WaiYanSheChuZhong_5_T.json'),
  "/WaiYanSheChuZhong_6-Volume-down.json": () => require('../public/dicts/WaiYanSheChuZhong_6-Volume-down.json'),
  "/WaiYanSheChuZhong_6-Volume-top.json": () => require('../public/dicts/WaiYanSheChuZhong_6-Volume-top.json'),
  "/WaiYanSheChuZhong_6_T.json": () => require('../public/dicts/WaiYanSheChuZhong_6_T.json'),
  "/WaiYanSheGaoZhong_1_T.json": () => require('../public/dicts/WaiYanSheGaoZhong_1_T.json'),
  "/WaiYanSheGaoZhong_2_T.json": () => require('../public/dicts/WaiYanSheGaoZhong_2_T.json'),
  "/YiLin_1.json": () => require('../public/dicts/YiLin_1.json'),
  "/YiLin_2.json": () => require('../public/dicts/YiLin_2.json'),
  "/YiLin_3.json": () => require('../public/dicts/YiLin_3.json'),
  "/ZaiYaoNiMing_GRE3000.json": () => require('../public/dicts/ZaiYaoNiMing_GRE3000.json'),
  "/ZhongKaoHeXin.json": () => require('../public/dicts/ZhongKaoHeXin.json'),
  "/adult-self-study-examination.json": () => require('../public/dicts/adult-self-study-examination.json'),
  "/ai_for_science.json": () => require('../public/dicts/ai_for_science.json'),
  "/ai_machine_learning.json": () => require('../public/dicts/ai_machine_learning.json'),
  "/archVocabulary.json": () => require('../public/dicts/archVocabulary.json'),
  "/chinese_test.json": () => require('../public/dicts/chinese_test.json'),
  "/coca20000.json": () => require('../public/dicts/coca20000.json'),
  "/csharp-keywords.json": () => require('../public/dicts/csharp-keywords.json'),
  "/csharp-list.json": () => require('../public/dicts/csharp-list.json'),
  "/csharp-string.json": () => require('../public/dicts/csharp-string.json'),
  "/en2german.json": () => require('../public/dicts/en2german.json'),
  "/gaokao-yuedu-gaopin.json": () => require('../public/dicts/gaokao-yuedu-gaopin.json'),
  "/german2en.json": () => require('../public/dicts/german2en.json'),
  "/go_builtin.json": () => require('../public/dicts/go_builtin.json'),
  "/go_keyword.json": () => require('../public/dicts/go_keyword.json'),
  "/gre-ciyileiji.json": () => require('../public/dicts/gre-ciyileiji.json'),
  "/ielts-807.json": () => require('../public/dicts/ielts-807.json'),
  "/ielts-real-1.json": () => require('../public/dicts/ielts-real-1.json'),
  "/ielts-real-2.json": () => require('../public/dicts/ielts-real-2.json'),
  "/ielts-real-3.json": () => require('../public/dicts/ielts-real-3.json'),
  "/ielts-real-4.json": () => require('../public/dicts/ielts-real-4.json'),
  "/ielts-real-5.json": () => require('../public/dicts/ielts-real-5.json'),
  "/ielts-real-high.json": () => require('../public/dicts/ielts-real-high.json'),
  "/it-words.json": () => require('../public/dicts/it-words.json'),
  "/itVocabulary.json": () => require('../public/dicts/itVocabulary.json'),
  "/japanese_test.json": () => require('../public/dicts/japanese_test.json'),
  "/java-arraylist.json": () => require('../public/dicts/java-arraylist.json'),
  "/java-character.json": () => require('../public/dicts/java-character.json'),
  "/java-hashmap.json": () => require('../public/dicts/java-hashmap.json'),
  "/java-linkedlist.json": () => require('../public/dicts/java-linkedlist.json'),
  "/java-string.json": () => require('../public/dicts/java-string.json'),
  "/java-stringBuffer.json": () => require('../public/dicts/java-stringBuffer.json'),
  "/jiJiao3-1.json": () => require('../public/dicts/jiJiao3-1.json'),
  "/jiJiao3-2.json": () => require('../public/dicts/jiJiao3-2.json'),
  "/jiJiao4-1.json": () => require('../public/dicts/jiJiao4-1.json'),
  "/jiJiao4-2.json": () => require('../public/dicts/jiJiao4-2.json'),
  "/jiJiao5-1.json": () => require('../public/dicts/jiJiao5-1.json'),
  "/jiJiao5-2.json": () => require('../public/dicts/jiJiao5-2.json'),
  "/jiJiao6-1.json": () => require('../public/dicts/jiJiao6-1.json'),
  "/jiJiao6-2.json": () => require('../public/dicts/jiJiao6-2.json'),
  "/jiJiao7-1.json": () => require('../public/dicts/jiJiao7-1.json'),
  "/jiJiao7-2.json": () => require('../public/dicts/jiJiao7-2.json'),
  "/jiJiao8-1.json": () => require('../public/dicts/jiJiao8-1.json'),
  "/jiJiao8-2.json": () => require('../public/dicts/jiJiao8-2.json'),
  "/jiJiao9.json": () => require('../public/dicts/jiJiao9.json'),
  "/js-array.json": () => require('../public/dicts/js-array.json'),
  "/js-date.json": () => require('../public/dicts/js-date.json'),
  "/js-global.json": () => require('../public/dicts/js-global.json'),
  "/js-map-set.json": () => require('../public/dicts/js-map-set.json'),
  "/js-math.json": () => require('../public/dicts/js-math.json'),
  "/js-number.json": () => require('../public/dicts/js-number.json'),
  "/js-object.json": () => require('../public/dicts/js-object.json'),
  "/js-promise.json": () => require('../public/dicts/js-promise.json'),
  "/js-string.json": () => require('../public/dicts/js-string.json'),
  "/ket2021.json": () => require('../public/dicts/ket2021.json'),
  "/linux-command.json": () => require('../public/dicts/linux-command.json'),
  "/nce-new-1.json": () => require('../public/dicts/nce-new-1.json'),
  "/nce-new-2.json": () => require('../public/dicts/nce-new-2.json'),
  "/nce-new-3.json": () => require('../public/dicts/nce-new-3.json'),
  "/nce-new-4.json": () => require('../public/dicts/nce-new-4.json'),
  "/python-array.json": () => require('../public/dicts/python-array.json'),
  "/python-builtin.json": () => require('../public/dicts/python-builtin.json'),
  "/python-class.json": () => require('../public/dicts/python-class.json'),
  "/python-date.json": () => require('../public/dicts/python-date.json'),
  "/python-file.json": () => require('../public/dicts/python-file.json'),
  "/python-math.json": () => require('../public/dicts/python-math.json'),
  "/python-set.json": () => require('../public/dicts/python-set.json'),
  "/python-string.json": () => require('../public/dicts/python-string.json'),
  "/python-sys.json": () => require('../public/dicts/python-sys.json'),
  "/raz-A.json": () => require('../public/dicts/raz-A.json'),
  "/raz-AA.json": () => require('../public/dicts/raz-AA.json'),
  "/raz-B.json": () => require('../public/dicts/raz-B.json'),
  "/raz-C.json": () => require('../public/dicts/raz-C.json'),
  "/raz-D.json": () => require('../public/dicts/raz-D.json'),
  "/raz-E.json": () => require('../public/dicts/raz-E.json'),
  "/raz-F.json": () => require('../public/dicts/raz-F.json'),
  "/raz-G.json": () => require('../public/dicts/raz-G.json'),
  "/raz-H.json": () => require('../public/dicts/raz-H.json'),
  "/raz-I.json": () => require('../public/dicts/raz-I.json'),
  "/raz-J.json": () => require('../public/dicts/raz-J.json'),
  "/raz-K.json": () => require('../public/dicts/raz-K.json'),
  "/raz-L.json": () => require('../public/dicts/raz-L.json'),
  "/raz-M.json": () => require('../public/dicts/raz-M.json'),
  "/raz-N.json": () => require('../public/dicts/raz-N.json'),
  "/raz-O.json": () => require('../public/dicts/raz-O.json'),
  "/raz-P.json": () => require('../public/dicts/raz-P.json'),
  "/raz-Q.json": () => require('../public/dicts/raz-Q.json'),
  "/raz-R.json": () => require('../public/dicts/raz-R.json'),
  "/raz-S.json": () => require('../public/dicts/raz-S.json'),
  "/raz-T.json": () => require('../public/dicts/raz-T.json'),
  "/raz-U.json": () => require('../public/dicts/raz-U.json'),
  "/raz-V.json": () => require('../public/dicts/raz-V.json'),
  "/raz-W.json": () => require('../public/dicts/raz-W.json'),
  "/raz-X.json": () => require('../public/dicts/raz-X.json'),
  "/raz-Y.json": () => require('../public/dicts/raz-Y.json'),
  "/raz-Z.json": () => require('../public/dicts/raz-Z.json'),
  "/raz-Z1.json": () => require('../public/dicts/raz-Z1.json'),
  "/raz-Z2.json": () => require('../public/dicts/raz-Z2.json'),
  "/raz-all.json": () => require('../public/dicts/raz-all.json'),
  "/self-study_English1.json": () => require('../public/dicts/self-study_English1.json'),
  "/self-study_English2.json": () => require('../public/dicts/self-study_English2.json'),
  "/self-study_English3.json": () => require('../public/dicts/self-study_English3.json'),
  "/suffix_word.json": () => require('../public/dicts/suffix_word.json'),
  "/tingshuokaoshi.json": () => require('../public/dicts/tingshuokaoshi.json'),
  "/top2000words.json": () => require('../public/dicts/top2000words.json'),
  "/voa.json": () => require('../public/dicts/voa.json'),
  "/waiyan-xin-3-1.json": () => require('../public/dicts/waiyan-xin-3-1.json'),
  "/waiyan-xin-3-2.json": () => require('../public/dicts/waiyan-xin-3-2.json'),
  "/waiyan-xin-4-1.json": () => require('../public/dicts/waiyan-xin-4-1.json'),
  "/waiyan-xin-4-2.json": () => require('../public/dicts/waiyan-xin-4-2.json'),
  "/waiyan-xin-5-1.json": () => require('../public/dicts/waiyan-xin-5-1.json'),
  "/waiyan-xin-5-2.json": () => require('../public/dicts/waiyan-xin-5-2.json'),
  "/waiyan-xin-6-1.json": () => require('../public/dicts/waiyan-xin-6-1.json'),
  "/waiyan-xin-6-2.json": () => require('../public/dicts/waiyan-xin-6-2.json'),
  "/word_roots1.json": () => require('../public/dicts/word_roots1.json'),
  "/xinghuoqiaoji_4.json": () => require('../public/dicts/xinghuoqiaoji_4.json'),
  "/xinghuoqiaoji_6.json": () => require('../public/dicts/xinghuoqiaoji_6.json'),
  "/xueshiyingyu.json": () => require('../public/dicts/xueshiyingyu.json'),
  "/zhuan-cha-ben.json": () => require('../public/dicts/zhuan-cha-ben.json'),
} as DictionaryJsonMap

export default dictionaryJsonMap
