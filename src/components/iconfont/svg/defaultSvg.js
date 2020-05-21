/**
 * TODO:
 *
 * 1. arrow
 * 2. +
 * 3. selected
 */
const edit =
  'M0 960c0-35.328 28.48-64 64-64h896c35.328 0 64 28.416 64 64 0 35.328-28.48 64-64 64H64c-35.328 0-64-28.416-64-64zM640 128l128 128-512 512H160.32A31.808 31.808 0 0 1 128 735.68V640l512-512z m165.952-128c14.912 0 34.176 8.128 44.16 18.176l27.712 27.648c10.304 10.304 18.176 29.824 18.176 44.16v11.968c0 14.912-8.32 34.304-18.56 44.544L800 224l-128-128L749.44 18.56c10.368-10.368 30.208-18.56 44.608-18.56z';
const help =
  'M512 0c282.7776 0 512 229.2224 512 512s-229.2224 512-512 512S0 794.7776 0 512 229.2224 0 512 0z m0 768a51.2 51.2 0 1 0 0 102.4 51.2 51.2 0 0 0 0-102.4z m0-563.2a204.8 204.8 0 0 0-204.8 204.8 51.2 51.2 0 1 0 102.4 0 102.4 102.4 0 1 1 102.4 102.4l-5.9904 0.3584A51.2 51.2 0 0 0 460.8 563.2v102.4l0.3584 5.9904A51.2 51.2 0 0 0 512 716.8l5.9904-0.3584A51.2 51.2 0 0 0 563.2 665.6v-57.7024l7.936-2.1504A204.9024 204.9024 0 0 0 512 204.8z';
const selectedUnBordered =
  'M12.98718064 533.4506155l41.75719932-56.34361617a11.654835 11.654835 0 0 1 13.01337286-4.14711954l3.43209847 1.78755185 252.47374454 192.19751493c4.29012309 3.21759233 10.29629546 3.14608971 14.443415-0.28600876L954.59770055 156.63480362a11.654835 11.654835 0 0 1 15.58744672 0.71501941l38.68261053 37.89608852c3.71810724 3.57510203 4.43312665 9.00925852 2.35956769 13.37088254l-2.35956769 3.21759232-669.54521264 654.31527564a11.654835 11.654835 0 0 1-13.44238517 2.07355895l-3.00308619-2.2165625-308.8888633-317.46910952a11.654835 11.654835 0 0 1-1.00102986-15.01543086z';
const selected =
  'M512 0c282.7776 0 512 229.2224 512 512s-229.2224 512-512 512S0 794.7776 0 512 229.2224 0 512 0z m279.04 362.8032a51.2 51.2 0 0 0-72.3968 0l-253.44 253.3888-108.6464-108.544a51.2 51.2 0 0 0-72.3968 72.3456l144.2304 144.1792 0.6144 0.6656a51.2 51.2 0 0 0 72.3968 0L791.04 435.2a51.2 51.2 0 0 0 0-72.3968z';
const unselected =
  'M512 0c282.752 0 512 229.248 512 512s-229.248 512-512 512S0 794.752 0 512 229.248 0 512 0z m0 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667S747.648 85.333333 512 85.333333z';
const volumeMute =
  'M541.262769 42.062769a39.384615 39.384615 0 0 1 63.330462 26.702769l0.236307 4.371693v877.725538a39.384615 39.384615 0 0 1-59.943384 33.595077l-3.623385-2.520615-293.218461-228.036923h-155.175385a39.384615 39.384615 0 0 1-38.360615-30.326154l-0.787693-4.450462-0.275692-4.568615V309.444923a39.384615 39.384615 0 0 1 34.816-39.108923l4.568615-0.275692h155.21477l293.218461-228.036923z m225.240616 199.561846l67.623384 167.463385 70.577231-166.242462a39.384615 39.384615 0 1 1 72.507077 30.759385l-101.376 238.788923 97.201231 240.482462a39.384615 39.384615 0 0 1-73.019077 29.499077l-67.702154-167.463385-70.498462 166.242462A39.384615 39.384615 0 1 1 689.230769 750.395077l101.336616-238.788923-97.161847-240.482462a39.384615 39.384615 0 0 1 73.058462-29.499077z';
const volumeMax =
  'M521.570462 42.062769a39.384615 39.384615 0 0 1 63.566769 31.113846v877.686154a39.384615 39.384615 0 0 1-63.566769 31.113846l-293.218462-228.076307h-155.175385a39.384615 39.384615 0 0 1-39.148307-34.776616l-0.275693-4.568615V309.444923a39.384615 39.384615 0 0 1 39.384616-39.384615h155.214769z m340.676923 172.032A409.6 409.6 0 0 1 990.286769 512a409.6 409.6 0 0 1-128.827077 298.692923 39.384615 39.384615 0 1 1-54.075077-57.265231A330.830769 330.830769 0 0 0 911.478154 512a330.830769 330.830769 0 0 0-103.424-240.758154 39.384615 39.384615 0 0 1 54.232615-57.107692zM708.135385 348.317538A207.832615 207.832615 0 0 1 787.692308 512a207.950769 207.950769 0 0 1-87.158154 169.393231 39.384615 39.384615 0 0 1-45.843692-64.039385A129.181538 129.181538 0 0 0 708.923077 512a129.102769 129.102769 0 0 0-49.467077-101.769846 39.384615 39.384615 0 1 1 48.679385-61.912616z';
const volumeMuteBorder =
  'M541.262769 42.062769a39.384615 39.384615 0 0 1 63.566769 31.113846v877.686154a39.384615 39.384615 0 0 1-63.566769 31.113846l-293.218461-228.076307h-155.175385a39.384615 39.384615 0 0 1-39.148308-34.776616l-0.275692-4.568615V309.444923a39.384615 39.384615 0 0 1 39.384615-39.384615h155.21477zM526.060308 153.6l-240.246154 186.88a39.384615 39.384615 0 0 1-24.182154 8.310154H132.214154v326.301538h129.417846a39.384615 39.384615 0 0 1 19.849846 5.395693l4.332308 2.953846 240.246154 186.840615V153.639385z m240.443077 87.985231l67.623384 167.463384 70.577231-166.242461a39.384615 39.384615 0 1 1 72.507077 30.759384l-101.376 238.788924 97.201231 240.482461a39.384615 39.384615 0 0 1-73.019077 29.499077l-67.702154-167.463385-70.498462 166.242462A39.384615 39.384615 0 1 1 689.230769 750.395077l101.336616-238.788923-97.161847-240.482462a39.384615 39.384615 0 0 1 73.058462-29.499077z';
const volumeMaxBorder =
  'M521.570462 42.062769a39.384615 39.384615 0 0 1 63.330461 26.702769l0.236308 4.371693v877.725538a39.384615 39.384615 0 0 1-59.943385 33.595077l-3.623384-2.520615-293.218462-228.036923h-155.175385a39.384615 39.384615 0 0 1-38.360615-30.326154l-0.787692-4.450462-0.275693-4.568615V309.444923a39.384615 39.384615 0 0 1 34.816-39.108923l4.568616-0.275692h155.214769l293.218462-228.036923zM506.368 153.6l-240.246154 186.88a39.384615 39.384615 0 0 1-18.983384 7.955692l-5.19877 0.393846-129.417846-0.039384v326.301538h129.417846a39.384615 39.384615 0 0 1 15.202462 3.072l4.647384 2.363077 4.332308 2.914462 240.246154 186.840615V153.639385z m355.918769 60.455385A409.6 409.6 0 0 1 990.247385 512a409.6 409.6 0 0 1-128.827077 298.692923 39.384615 39.384615 0 1 1-54.075077-57.265231A330.830769 330.830769 0 0 0 911.478154 512a330.830769 330.830769 0 0 0-103.424-240.758154 39.384615 39.384615 0 0 1 54.232615-57.107692zM708.135385 348.317538A207.832615 207.832615 0 0 1 787.692308 512a207.950769 207.950769 0 0 1-87.158154 169.393231 39.384615 39.384615 0 0 1-45.843692-64.039385A129.181538 129.181538 0 0 0 708.923077 512a129.102769 129.102769 0 0 0-49.467077-101.769846 39.384615 39.384615 0 1 1 48.679385-61.912616z';

const svgs = {
  0: 'M418.909091 219.927273V794.996364c0 32.023273 18.013091 61.300364 46.545454 75.776a102.958545 102.958545 0 0 0 93.09091 0c28.532364-14.429091 46.545455-43.752727 46.545454-75.776V219.927273c0-30.72-18.292364-58.554182-46.545454-70.702546a117.76 117.76 0 0 0-93.09091 0c-28.253091 12.148364-46.545455 39.936-46.545454 70.702546zM410.298182 20.945455a257.396364 257.396364 0 0 1 203.403636 0A216.576 216.576 0 0 1 744.727273 219.927273V794.996364a224.581818 224.581818 0 0 1-123.066182 200.331636c-68.933818 34.909091-150.388364 34.909091-219.322182 0A224.581818 224.581818 0 0 1 279.272727 794.996364V219.927273C279.272727 133.352727 330.798545 55.156364 410.298182 20.945455z',
  1: 'M535.272727 0h139.636364v1024H535.272727V186.181818L349.090909 325.818182V139.636364z',
  2: 'M744.727273 884.363636v139.636364H279.272727v-134.050909L590.987636 383.767273A116.363636 116.363636 0 0 0 605.090909 328.285091V231.796364c0-32.954182-17.687273-63.394909-46.266182-79.732364a94.347636 94.347636 0 0 0-93.649454 0A91.834182 91.834182 0 0 0 418.909091 231.796364v115.665454H279.272727V231.796364C279.272727 148.759273 323.770182 72.052364 395.915636 30.813091a233.984 233.984 0 0 1 232.168728 0A231.470545 231.470545 0 0 1 744.727273 231.796364v96.488727a256 256 0 0 1-30.999273 122.135273L441.157818 884.363636H744.727273z',
  3: 'M279.272727 744.512727h139.507636v65.382579c0 29.668624 18.601018 56.26808 46.502546 66.405634a136.019945 136.019945 0 0 0 93.005091 0c27.901527-10.184057 46.502545-36.737011 46.502545-66.405634v-130.765158c0-29.668624-18.601018-56.26808-46.502545-66.405635a135.973443 135.973443 0 0 0-46.502546-8.184448V419.459935c15.764363 0 31.482223-2.74365 46.502546-8.184448 27.901527-10.184057 46.502545-36.737011 46.502545-66.405635V214.104694c0-29.668624-18.601018-56.26808-46.502545-66.405634a136.019945 136.019945 0 0 0-93.005091 0c-27.901527 10.184057-46.502545 36.737011-46.502546 66.405634V279.487273H279.272727V214.104694A210.191505 210.191505 0 0 1 417.571297 16.608384a275.527581 275.527581 0 0 1 188.428314 0A210.191505 210.191505 0 0 1 744.298181 214.104694v130.765158A210.191505 210.191505 0 0 1 661.52365 512 210.191505 210.191505 0 0 1 744.298181 679.130148v130.765158a210.191505 210.191505 0 0 1-138.29857 197.49631 275.527581 275.527581 0 0 1-188.428314 0A210.191505 210.191505 0 0 1 279.272727 809.895306V744.512727z',
  4: 'M558.545455 791.272727v-279.272727h139.636363v279.272727h46.545455v139.636364H698.181818v93.090909H558.545455v-93.090909H279.272727v-139.636364L465.454545 0h139.636364L418.909091 791.272727h139.636364z',
  5: 'M418.896334 558.494428H279.272727V0h465.412024v139.623607H418.896334v204.455502a246.156419 246.156419 0 0 1 200.592583 6.422686A222.327324 222.327324 0 0 1 744.684751 550.535883v248.623103c0 85.1704-48.635556 162.894208-125.195834 200.034088a246.156419 246.156419 0 0 1-215.020355 0A222.327324 222.327324 0 0 1 279.272727 799.158986V744.659238h139.623607v54.546289c0 31.648018 18.057987 60.550104 46.541203 74.372842a106.579353 106.579353 0 0 0 93.082405 0c28.483216-13.822737 46.541202-42.678283 46.541202-74.372842v-248.716185c0-31.648018-18.057987-60.550104-46.541202-74.372842a106.579353 106.579353 0 0 0-93.082405 0c-28.436675 13.822737-46.541202 42.678283-46.541203 82.377928z',
  6: 'M497.716259 418.741594a258.642725 258.642725 0 0 1 115.246992 20.146124A215.931082 215.931082 0 0 1 744.541165 637.650394v167.03137a215.931082 215.931082 0 0 1-131.577914 198.762676 258.689252 258.689252 0 0 1-202.112609 0A215.931082 215.931082 0 0 1 279.272727 804.681764v-158.191269-8.840101c0-32.522264 7.304714-63.881357 20.611392-92.12315L511.906946 0h139.580532L497.716259 418.741594zM465.380103 567.301807c-28.195267 12.003926-46.526844 39.640871-46.526844 70.302061v167.031369c0 30.66119 18.331576 58.298135 46.526844 70.255534a119.10872 119.10872 0 0 0 93.053687 0c28.195267-11.957399 46.526844-39.594344 46.526844-70.255534v-167.031369c0-30.66119-18.331576-58.298135-46.526844-70.255535a119.10872 119.10872 0 0 0-93.053687 0z',
  7: 'M279.272727 139.636364V0h465.454546v232.727273L558.545455 1024H418.909091L605.090909 232.727273V139.636364H418.909091v93.090909H279.272727V139.636364z',
  8: 'M661.52365 512A210.191505 210.191505 0 0 1 744.298181 679.130148v130.765158a210.191505 210.191505 0 0 1-138.29857 197.49631 275.527581 275.527581 0 0 1-188.428314 0A210.191505 210.191505 0 0 1 279.272727 809.895306v-130.765158A210.191505 210.191505 0 0 1 362.047258 512 210.191505 210.191505 0 0 1 279.272727 344.869852V214.104694A210.191505 210.191505 0 0 1 417.571297 16.608384a275.527581 275.527581 0 0 1 188.428314 0A210.191505 210.191505 0 0 1 744.298181 214.104694v130.765158A210.191505 210.191505 0 0 1 661.52365 512zM418.780363 214.104694v130.765158c0 29.668624 18.601018 56.26808 46.502546 66.405635a136.019945 136.019945 0 0 0 93.005091 0c27.901527-10.184057 46.502545-36.737011 46.502545-66.405635V214.104694c0-29.668624-18.601018-56.26808-46.502545-66.405634a136.019945 136.019945 0 0 0-93.005091 0c-27.901527 10.184057-46.502545 36.737011-46.502546 66.405634z m0 465.025454v130.765158c0 29.668624 18.601018 56.26808 46.502546 66.405634a136.019945 136.019945 0 0 0 93.005091 0c27.901527-10.184057 46.502545-36.737011 46.502545-66.405634v-130.765158c0-29.668624-18.601018-56.26808-46.502545-66.405635a136.019945 136.019945 0 0 0-93.005091 0c-27.901527 10.184057-46.502545 36.737011-46.502546 66.405635z',
  9: 'M604.960634 386.349606v-167.03137c0-30.66119-18.331576-58.298135-46.526844-70.255534a119.10872 119.10872 0 0 0-93.053687 0c-28.195267 11.957399-46.526844 39.594344-46.526844 70.255534v167.03137c0 30.66119 18.331576 58.298135 46.526844 70.255534a119.10872 119.10872 0 0 0 93.053687 0c28.195267-11.957399 46.526844-39.594344 46.526844-70.255534z m139.580531-30.149395V391.234924a372.21475 372.21475 0 0 1-28.614009 143.163099L511.906946 1024H372.326415l175.313147-420.788775a258.689252 258.689252 0 0 1-136.78892-18.098943A215.931082 215.931082 0 0 1 279.272727 386.349606v-167.03137A215.931082 215.931082 0 0 1 410.850642 20.55556a258.689252 258.689252 0 0 1 202.112609 0A215.931082 215.931082 0 0 1 744.541165 219.318236v136.881975z',
  power:
    'M512 0C794.760533 0 1024 229.239467 1024 512S794.760533 1024 512 1024 0 794.760533 0 512 229.239467 0 512 0z m185.048178 327.0656a26.988089 26.988089 0 0 0-38.183822 38.183822 207.712711 207.712711 0 1 1-293.728712 0 26.988089 26.988089 0 1 0-38.183822-38.183822c-102.172444 102.1952-102.172444 267.901156 0 370.096356 102.1952 102.172444 267.901156 102.172444 370.096356 0 102.172444-102.1952 102.172444-267.901156 0-370.096356zM511.886222 227.555556a27.079111 27.079111 0 0 0-26.919822 24.302933l-0.136533 2.776178v196.152889a27.079111 27.079111 0 0 0 53.998933 2.776177l0.136533-2.776177v-196.152889a27.079111 27.079111 0 0 0-27.079111-27.079111z',
  arrow:
    'M213.333333 85.333333l426.666667 426.666667-426.666667 426.666667 85.333334 85.333333 512-512-512-512z',
  '+':
    'M558.545455 240.48484804v217.212122h217.212121v93.090909H558.529939L558.545455 768.00000004h-93.09091l-0.015515-217.212121H248.242424v-93.090909h217.212121V240.48484804z',
  '-':
    'M717.09184214 542.81205291h-410.1317627c-16.98779924 0-30.7590824-13.77023422-30.75908241-30.75803348s13.77023422-30.76537592 30.75908241-30.76537593h410.13281163c16.99566616 0 30.7590824 13.77757668 30.7590824 30.76537593-0.00052447 16.98884817-13.76446518 30.75803347-30.7590824 30.75803348z',
  '.': 'M464 928h96v96H464z',
  ':':
    'M558.545455 605.090909v93.090909H465.454545v-93.090909h93.09091z m0-263.757576v93.090909H465.454545v-93.090909h93.09091z',
  ',': 'M464 816h96v96l-48 112H464l48-112H464z',
  celsius:
    'M722.323394 20.96097A216.591515 216.591515 0 0 1 853.333333 219.927273V279.272727h-139.636363v-59.360969a76.955152 76.955152 0 0 0-46.545455-70.687031 117.79103 117.79103 0 0 0-93.090909 0 76.955152 76.955152 0 0 0-46.545454 70.687031V794.996364c0 32.007758 17.997576 61.300364 46.545454 75.776a102.974061 102.974061 0 0 0 93.090909 0c28.547879-14.475636 46.545455-43.752727 46.545455-75.776V744.727273h139.636363v50.269091a224.566303 224.566303 0 0 1-123.066181 200.331636 242.610424 242.610424 0 0 1-219.322182 0A224.566303 224.566303 0 0 1 387.878788 794.996364V219.927273A216.591515 216.591515 0 0 1 518.888727 20.945455c64.930909-27.927273 138.503758-27.927273 203.434667 0zM248.242424 0h31.030303a77.575758 77.575758 0 0 1 77.575758 77.575758v77.575757a77.575758 77.575758 0 0 1-77.575758 77.575758H248.242424a77.575758 77.575758 0 0 1-77.575757-77.575758V77.575758a77.575758 77.575758 0 0 1 77.575757-77.575758z m0 62.060606a15.515152 15.515152 0 0 0-15.515151 15.515152v77.575757a15.515152 15.515152 0 0 0 15.515151 15.515152h31.030303a15.515152 15.515152 0 0 0 15.515152-15.515152V77.575758a15.515152 15.515152 0 0 0-15.515152-15.515152H248.242424z',
  fahrenheit:
    'M853.333333 0v139.636364l-325.818181-0.015516V372.363636h294.787878v139.636364H527.515152v512h-139.636364V0h465.454545zM248.242424 0h31.030303a77.575758 77.575758 0 0 1 77.575758 77.575758v77.575757a77.575758 77.575758 0 0 1-77.575758 77.575758H248.242424a77.575758 77.575758 0 0 1-77.575757-77.575758V77.575758a77.575758 77.575758 0 0 1 77.575757-77.575758z m0 62.060606a15.515152 15.515152 0 0 0-15.515151 15.515152v77.575757a15.515152 15.515152 0 0 0 15.515151 15.515152h31.030303a15.515152 15.515152 0 0 0 15.515152-15.515152V77.575758a15.515152 15.515152 0 0 0-15.515152-15.515152H248.242424z',
  '%':
    'M603.701493 794.746269a76.41791 76.41791 0 0 1 76.41791 76.41791v76.417911a76.41791 76.41791 0 0 1-76.41791 76.41791h-30.567165a76.41791 76.41791 0 0 1-76.41791-76.41791v-76.417911a76.41791 76.41791 0 0 1 76.41791-76.41791h30.567165z m61.134328-794.746269L420.298507 1024H359.164179L603.701493 0h61.134328z m-61.134328 855.880597h-30.567165a15.283582 15.283582 0 0 0-15.283582 15.283582v76.417911a15.283582 15.283582 0 0 0 15.283582 15.283582h30.567165a15.283582 15.283582 0 0 0 15.283582-15.283582v-76.417911a15.283582 15.283582 0 0 0-15.283582-15.283582zM450.865672 0a76.41791 76.41791 0 0 1 76.41791 76.41791v76.417911a76.41791 76.41791 0 0 1-76.41791 76.41791H420.298507a76.41791 76.41791 0 0 1-76.41791-76.41791V76.41791a76.41791 76.41791 0 0 1 76.41791-76.41791h30.567165z m0 61.134328H420.298507a15.283582 15.283582 0 0 0-15.283582 15.283582v76.417911a15.283582 15.283582 0 0 0 15.283582 15.283582h30.567165a15.283582 15.283582 0 0 0 15.283582-15.283582V76.41791a15.283582 15.283582 0 0 0-15.283582-15.283582z',
  edit,
  minus:
    'M85.333333 469.333333m42.666667 0l768 0q42.666667 0 42.666667 42.666667l0 0q0 42.666667-42.666667 42.666667l-768 0q-42.666667 0-42.666667-42.666667l0 0q0-42.666667 42.666667-42.666667Z',
  plus:
    'M512 85.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v341.333333h341.333333a42.666667 42.666667 0 0 1 0 85.333334h-341.376L554.666667 896a42.666667 42.666667 0 0 1-85.333334 0l-0.042666-341.333333H128a42.666667 42.666667 0 0 1 0-85.333334h341.333333V128a42.666667 42.666667 0 0 1 42.666667-42.666667z',
  error:
    'M512 0c282.7776 0 512 229.2224 512 512s-229.2224 512-512 512S0 794.7776 0 512 229.2224 0 512 0zM403.4048 330.9568A51.2 51.2 0 0 0 330.9568 403.456l108.6464 108.544-108.6464 108.6464a51.2 51.2 0 0 0 72.448 72.448L512 584.3968l108.5952 108.6464a51.2 51.2 0 0 0 72.448-72.448L584.3968 512l108.6464-108.5952a51.2 51.2 0 1 0-72.448-72.448l-108.544 108.5952z',
  warning:
    'M512 0c282.7776 0 512 229.2224 512 512s-229.2224 512-512 512S0 794.7776 0 512 229.2224 0 512 0z m0 665.6a76.8 76.8 0 1 0 0 153.6 76.8 76.8 0 0 0 0-153.6z m0-460.8a72.192 72.192 0 0 0-71.9872 76.6464l17.6128 281.856a54.4768 54.4768 0 0 0 108.7488 0l17.6128-281.856A72.192 72.192 0 0 0 512 204.8z',
  correct: selected,
  backIos:
    'M770.673778 21.959111a56.888889 56.888889 0 0 1 0 80.440889l-402.204445 402.318222 402.204445 402.204445a56.888889 56.888889 0 0 1-80.440889 80.497777L247.751111 544.938667a56.888889 56.888889 0 0 1 0-80.497778L690.232889 21.959111a56.888889 56.888889 0 0 1 80.440889 0z',
  backAndroid:
    'M603.875556 28.956444a56.888889 56.888889 0 0 1 0 80.440889L258.161778 455.111111H938.666667a56.888889 56.888889 0 0 1 6.656 113.379556L938.666667 568.888889H258.844444l345.031112 345.031111a56.888889 56.888889 0 1 1-80.440889 80.440889L80.952889 551.879111a56.888889 56.888889 0 0 1 0-80.440889L523.377778 28.956444a56.888889 56.888889 0 0 1 80.440889 0z',
  moreV:
    'M512 213.333333a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z m0 384a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z m0 384a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z',
  moreH:
    'M213.333333 512a85.333333 85.333333 0 1 1-170.666666 0 85.333333 85.333333 0 0 1 170.666666 0z m384 0a85.333333 85.333333 0 1 1-170.666666 0 85.333333 85.333333 0 0 1 170.666666 0z m384 0a85.333333 85.333333 0 1 1-170.666666 0 85.333333 85.333333 0 0 1 170.666666 0z',
  close:
    'M964.544 59.456a64 64 0 0 1 0 90.496L602.56 512l361.984 362.112a64 64 0 0 1-90.496 90.496L512 602.496 149.952 964.48A64 64 0 0 1 59.52 874.048l362.048-362.112L59.52 149.952A64 64 0 0 1 149.952 59.52l362.112 361.984L874.048 59.52a64 64 0 0 1 90.496 0z',
  selected,
  unselected,
  selectedUnBordered,
  volumeMute,
  volumeMax,
  volumeMuteBorder,
  volumeMaxBorder,
  help,

  /**
   * 兼容用途，不建议使用下面的 key
   */
  pen: edit,
  'notice-sharp': help,
  'selected-sharp': selected,
  'unselected-sharp': unselected,
  'volume-sharp-off': volumeMute,
  'volume-sharp-max': volumeMax,
  'volume-border-2': volumeMuteBorder,
  'volume-border-1': volumeMuteBorder,
  'volume-border-off': volumeMaxBorder,
  'help-sharp': help,
};

export default svgs;