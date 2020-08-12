# script to build bibliography of papers on "research" page

# before running:
# install python          https://www.python.org/downloads/
# install pip             https://pip.pypa.io/en/stable/installing/
# install manubot         https://github.com/manubot/manubot#installation

# to add a paper, add its doi to one of the lists below, then re-run this script

# preprints
manubot cite --output research-preprints.json \
  doi:10.1101/2020.05.03.066597 \
  doi:10.1101/2020.04.14.927251 \
  arxiv:2003.00898 \
  doi:10.1101/2020.02.17.20024133 \
  doi:10.1101/2020.02.12.945642 \
  doi:10.1101/730085 \
  doi:10.1101/836825 \
  doi:10.1101/833210 \
  doi:10.1101/814350 \
  doi:10.1101/786053 \
  doi:10.1101/787903 \
  doi:10.1101/793091 \
  doi:10.1101/055913 \
  doi:10.1101/118349 \

# 2020
manubot cite --output research-2020.json \
  doi:10.1158/1078-0432.CCR-20-0103 \
  doi:10.1038/s41591-020-0929-x \
  doi:10.1093/gigascience/giaa056 \
  doi:10.1016/j.copbio.2019.12.021 \
  doi:10.1093/nar/gkaa248 \
  doi:10.1186/s13059-020-02021-3 \
  doi:10.1016/j.annonc.2020.05.019 \
  doi:10.3390/genes11020226 \
  doi:10.1073/pnas.1917576117 \
  doi:10.1101/2020.01.17.910703 \
  doi:10.1016/j.csbj.2020.05.017 \

# 2019
manubot cite --output research-2019.json \
  doi:10.1186/s40478-019-0803-6 \
  doi:10.1186/s13059-019-1835-8 \
  doi:10.1182/bloodadvances.2019000303 \
  doi:10.1016/j.celrep.2019.09.071 \
  doi:10.1002/gepi.22262 \
  doi:10.1038/s41592-019-0585-6 \
  doi:10.1146/annurev-biodatasci-072018-021348 \
  doi:10.1161/CIRCOUTCOMES.118.005122 \
  doi:10.1371/journal.pcbi.1007128 \
  doi:10.1038/s41587-019-0143-x \
  doi:10.1093/bioinformatics/bty828 \
  doi:10.1016/j.cels.2019.04.003 \
  doi:10.1016/j.devcel.2019.03.001 \
  doi:10.1038/d41586-019-00218-6 \
  doi:10.1534/g3.118.200867 \
  doi:10.1142/9789813279827_0033 \

# 2018
manubot cite --output research-2018.json \
  doi:10.1038/s41592-018-0230-9 \
  doi:10.1093/gigascience/giy129 \
  doi:10.1016/j.tig.2018.07.003 \
  doi:10.1186/s13040-018-0175-7 \
  doi:10.1097/CCM.0000000000003148 \
  doi:10.1136/annrheumdis-2017-212935 \
  doi:10.1098/rsif.2017.0387 \
  doi:10.1016/j.cell.2018.03.035 \
  doi:10.1016/j.celrep.2018.03.046 \
  doi:10.1016/j.celrep.2018.03.076 \
  doi:10.1128/JB.00703-17 \
  doi:10.7554/eLife.32822 \
  pmc:PMC5760988 \
  pubmed:29218914 \

# 2017
manubot cite --output research-2017.json \
  doi:10.1038/s41598-017-17362-6 \
  doi:10.1186/s12859-017-1905-4 \
  doi:10.1534/g3.117.300172 \
  doi:10.1093/bioinformatics/btx344 \
  doi:10.1101/174474 \
  doi:10.1038/ejhg.2017.108 \
  doi:10.1007/s40471-017-0115-y \
  doi:10.1016/j.cels.2017.06.003 \
  doi:10.1056/NEJMc1705477 \
  doi:10.1038/ng.3830 \
  doi:10.1186/s13073-017-0417-1 \
  doi:10.1038/nbt.3780 \
  doi:10.1126/scitranslmed.aam6058 \
  doi:10.1186/s12864-017-3519-7 \
  doi:10.1142/9789813207813_0060 \

# 2016
manubot cite --output research-2016.json \
  doi:10.1126/scitranslmed.aal3701 \
  doi:10.1016/j.jbi.2016.10.007 \
  doi:10.1534/g3.116.033514 \
  doi:10.1126/scitranslmed.aal0067 \
  doi:10.1093/hmg/ddw160 \
  doi:10.1126/scitranslmed.aai8224 \
  doi:10.1007/s40142-016-0102-5 \
  doi:10.1186/s13059-016-1037-6 \
  doi:10.1126/scitranslmed.aah5494 \
  doi:10.1126/scitranslmed.aag3101 \
  doi:10.1126/scitranslmed.aaf9196 \
  doi:10.1126/scitranslmed.aaf6940 \
  doi:10.1161/CIRCGENETICS.115.001181 \
  doi:10.18632/oncotarget.7718 \
  doi:10.1128/mSystems.00025-15 \
  doi:10.7717/peerj.1621 \
  doi:10.1186/s13040-016-0082-8 \
  doi:10.1093/bib/bbv087 \
  doi:10.1093/bib/bbv018 \
  pmc:PMC4832978 \

# 2015
manubot cite --output research-2015.json \
  doi:10.1093/hmg/ddv440 \
  doi:10.1186/s12864-015-2250-5 \
  doi:10.1038/ncomms9019 \
  doi:10.1186/s13040-015-0050-8 \
  doi:10.1038/ng.3259 \
  doi:10.1038/nmeth.3249 \
  doi:10.1371/journal.pcbi.1004005 \
  pmc:PMC4299935 \

# 2014
manubot cite --output research-2014.json \
  doi:10.1002/jcp.24662 \
  doi:10.1186/1756-0381-7-17 \
  doi:10.1186/gm550 \

# 2013
manubot cite --output research-2013.json \
  doi:10.1101/gr.155697.113 \
  doi:10.1371/journal.pcbi.1002957 \
  doi:10.1007/978-3-642-37189-9_2 \

# 2012
manubot cite --output research-2012.json \
  doi:10.1371/journal.pcbi.1002816 \
  doi:10.1093/nar/gks458 \
  doi:10.1111/j.1749-6632.2011.06383.x \
