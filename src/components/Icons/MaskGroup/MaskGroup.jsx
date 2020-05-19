
/**
  * Do not change! File was auto generate.
  *
  */
import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

import {ReactComponent as MaskGroupSvg} from './MaskGroup.svg'

export const MaskGroup = (props) => {
    
    
    const [ length, setLength ] = useState( 0 );
    
    useEffect( () => {
    
      let el = document.querySelector( "#maskGroup-dash-array" );
      
      if( el !== null ){
        if( el.tagName === "group" ){
          el = el.lastElementChild;
        }
        
        const elLength = el.getTotalLength();
        setLength( elLength );
    }
  }, [] );

  
  return (
    <MaskGroupComponent length={length}>
      <svg width="100%"  height="100%"  viewBox="0 0 127 36"  fill="none"  xmlns="http://www.w3.org/2000/svg"> 
				<g id="Mask Group"> 
					<mask id="mask0"  maskType="alpha"  maskUnits="userSpaceOnUse"  x="0"  y="0"  width="100%"  height="100%"> 
						<path id="svg"  d="M7.52406  29.0519C6.18006  29.0519  4.93206  28.8119  3.78006  28.3319C2.62806  27.8519  1.70406  27.1199              
						 1.00806 26.1359C0.336064  25.1759  6.44512e-05  23.9999  6.44512e-05  22.6079C6.44512e-05  20.9039  0.468064  19.6799  1.40406  18.9359C2.34006  18.1679  3.40806  17.7839  4.60806  17.7839C3.96006  18.4799  3.46806  19.2479                       
						 3.13206 20.0879C2.79606  20.9279  2.62806  21.7679  2.62806  22.6079C2.62806  24.0479  3.09606  25.2479  4.03206  26.2079C4.99206  27.1679  6.36006  27.6479  8.13606  27.6479C9.26407  27.6479  10.3321  27.4439                       
						 11.3401 27.0359C12.3721  26.6279  13.2121  26.0279  13.8601  25.2359C14.5081  24.4439  14.8321  23.4959  14.8321  22.3919C14.8321  21.4319  14.5921  20.5919  14.1121  19.8719C13.6321  19.1279  13.0321  18.5039                       
						 12.3121 17.9999C11.5921  17.4719  10.6321  16.8479  9.43206  16.1279C8.20806  15.4079  7.22406  14.7839  6.48006  14.2559C5.76006  13.7039  5.14806  13.0439  4.64406  12.2759C4.14006  11.5079  3.88806  10.6199                       
						 3.88806 9.61192C3.88806  8.21992  4.32006  6.77992  5.18406  5.29192C6.04806  3.77992  7.26006  2.51992  8.82006  1.51192C10.4041  0.503921  12.1801  -7.9155e-05  14.1481  -7.9155e-05C15.4681  -7.9155e-05  16.4281  0.323921                       
						 17.0281 0.971921C17.6281  1.61992  17.9281  2.49592  17.9281  3.59992C17.9281  4.79992  17.6401  6.14392  17.0641  7.63192C16.4881  9.11992  15.8521  10.4159  15.1561  11.5199C14.3641  11.3519  13.9681  10.8359                       
						 13.9681 9.97192C13.9681  9.51592  14.0521  8.99992  14.2201  8.42392C14.4121  7.84792  14.6761  7.12792  15.0121  6.26392C15.3721  5.32792  15.6361  4.57192  15.8041  3.99592C15.9961  3.39592  16.0921  2.86792                       
						 16.0921 2.41192C16.0921  1.90792  15.9361  1.52392  15.6241  1.25992C15.3361  0.99592  14.8201  0.86392  14.0761  0.86392C12.6601  0.86392  11.3401  1.30792  10.1161  2.19592C8.91606  3.05992  7.95606  4.11592                       
						 7.23606 5.36392C6.51606  6.61192  6.15606  7.75192  6.15606  8.78392C6.15606  9.55192  6.36006  10.2359  6.76806  10.8359C7.20006  11.4359  7.72806  11.9639  8.35206  12.4199C8.97606  12.8519  9.82806  13.3679                       
						 10.9081 13.9679C12.2041  14.7119  13.2481  15.3839  14.0401  15.9839C14.8321  16.5599  15.5041  17.3039  16.0561  18.2159C16.6321  19.1039  16.9201  20.1599  16.9201  21.3839C16.9201  22.9679  16.4521  24.3359                       
						 15.5161 25.4879C14.6041  26.6399  13.4281  27.5159  11.9881  28.1159C10.5481  28.7399  9.06007  29.0519  7.52406  29.0519ZM21.6811  27.3239C20.9611  27.3239  20.4451  26.9759  20.1331  26.2799C19.8451  25.6079  19.7011                       
						 24.6359 19.7011  23.3639C19.7011  22.9079  19.7731  21.3359  19.9171  18.6479C19.9651  17.9279  20.0491  17.4719  20.1691  17.2799C20.2891  17.0639  20.5891  16.9559  21.0691  16.9559C21.4771  16.9559  21.7291                       
						 17.0399 21.8251  17.2079C21.9451  17.3519  22.0051  17.6519  22.0051  18.1079C22.0051  18.5879  21.9571  19.4759  21.8611  20.7719C21.7411  21.9239  21.6811  22.9679  21.6811  23.9039C21.6811  24.6239  21.7411                       
						 25.1399 21.8611  25.4519C21.9811  25.7639  22.1971  25.9199  22.5091  25.9199C23.3011  25.9199  24.2611  25.1159  25.3891  23.5079C26.5171  21.8759  27.5371  20.0519  28.4491  18.0359C28.4971  16.5239  28.6531                       
						 15.4679 28.9171  14.8679C29.2051  14.2679  29.6011  13.9679  30.1051  13.9679C30.5131  13.9679  30.8251  14.1239  31.0411  14.4359C31.2811  14.7239  31.4011  15.0239  31.4011  15.3359C31.4011  15.5759  31.2811                       
						 15.9119 31.0411  16.3439C30.7531  16.8959  30.5251  17.4479  30.3571  17.9999C30.2131  18.5279  30.1411  19.2479  30.1411  20.1599C30.1411  20.9519  30.2491  21.6119  30.4651  22.1399C30.7051  22.6439  31.1611                       
						 22.8959 31.8331  22.8959C32.3611  22.8959  32.8531  22.6919  33.3091  22.2839C33.7651  21.8759  34.2211  21.1919  34.6771  20.2319L35.1451  20.5919C34.2811  22.6079  33.0931  23.6159  31.5811  23.6159C30.7651  23.6159                       
						 30.0931 23.3279  29.5651  22.7519C29.0611  22.1519  28.7251  21.2759  28.5571  20.1239C27.5731  22.0919  26.4451  23.7839  25.1731  25.1999C23.9251  26.6159  22.7611  27.3239  21.6811  27.3239ZM35.3692  35.9999C34.7932                       
						 35.9999 34.3012  35.8199  33.8932  35.4599C33.4852  35.1239  33.2812  34.6079  33.2812  33.9119C33.2812  33.0239  33.6292  32.1959  34.3252  31.4279C35.0212  30.6839  35.8132  30.0359  36.7012  29.4839C37.6132                       
						 28.9559 38.8132  28.3199  40.3012  27.5759C40.9732  25.8479  41.5852  23.8679  42.1372  21.6359C40.0012  24.7079  38.0452  26.2439  36.2692  26.2439C35.4292  26.2439  34.7692  25.9319  34.2892  25.3079C33.8092                       
						 24.6599 33.5692  23.8079  33.5692  22.7519C33.5692  21.1679  34.0732  19.6559  35.0812  18.2159C36.1132  16.7759  37.3732  15.6239  38.8612  14.7599C40.3732  13.8719  41.7892  13.4279  43.1092  13.4279C43.7572                       
						 13.4279 44.2372  13.5359  44.5492  13.7519C44.8852  13.9679  45.0532  14.2439  45.0532  14.5799C45.0532  14.7719  44.9932  14.9399  44.8732  15.0839C44.7772  15.2039  44.6932  15.2759  44.6212  15.2999C44.3812                       
						 14.9399 43.9012  14.7599  43.1812  14.7599C41.9812  14.7599  40.8172  15.2159  39.6892  16.1279C38.5852  17.0399  37.6852  18.1439  36.9892  19.4399C36.2932  20.7359  35.9452  21.8999  35.9452  22.9319C35.9452                       
						 23.5079 36.0532  23.9519  36.2692  24.2639C36.5092  24.5519  36.8212  24.6959  37.2052  24.6959C37.8532  24.6959  38.6572  24.2519  39.6172  23.3639C40.6012  22.4759  41.5732  21.3359  42.5332  19.9439L42.9652                       
						 18.0359C43.0612 17.5799  43.2532  17.1599  43.5412  16.7759C43.8532  16.3919  44.2732  16.1999  44.8012  16.1999C45.0172  16.1999  45.2692  16.2359  45.5572  16.3079C45.5572  16.9559  45.2932  18.2639  44.7652                       
						 20.2319C44.2372 22.1759  43.5772  24.1559  42.7852  26.1719C44.0332  25.5719  45.1852  24.7439  46.2412  23.6879C47.3212  22.6079  48.1252  21.4079  48.6532  20.0879L49.1212  20.4479C48.6172  21.9119  47.7052  23.2439                       
						 46.3852 24.4439C45.0892  25.6439  43.7572  26.5679  42.3892  27.2159C41.2612  29.9519  40.1212  32.0999  38.9692  33.6599C37.8172  35.2199  36.6172  35.9999  35.3692  35.9999ZM35.2612  34.8479C35.8132  34.8479  36.4972                       
						 34.3199 37.3132  33.2639C38.1532  32.2319  39.0172  30.6599  39.9052  28.5479C38.1532  29.4359  36.7972  30.2639  35.8372  31.0319C34.8772  31.7999  34.3972  32.6519  34.3972  33.5879C34.3972  33.9719  34.4692                       
						 34.2719 34.6132  34.4879C34.7812  34.7279  34.9972  34.8479  35.2612  34.8479ZM57.957  29.0519C57.141  28.5959  56.733  27.9719  56.733  27.1799C56.733  26.2439  57.225  24.7799  58.209  22.7879C59.217  20.7959                       
						 60.549 18.5039  62.205  15.9119C60.741  15.7919  59.445  15.7319  58.317  15.7319H57.057C57.513  14.4839  58.761  13.8599  60.801  13.8599C61.449  13.8599  62.313  13.9439  63.393  14.1119C65.241  11.3279                       
						 67.113 8.71192  69.009  6.26392C70.929  3.79192  72.441  2.03992  73.545  1.00792C74.241  0.335921  74.817  -7.9155e-05  75.273  -7.9155e-05C75.777  -7.9155e-05  76.413  0.383921  77.181  1.15192C76.701  1.53592                       
						 76.005 3.09592  75.093  5.83192C74.181  8.54392  73.365  11.5199  72.645  14.7599C71.925  17.9759  71.565  20.5679  71.565  22.5359C71.565  23.4959  71.661  24.2159  71.853  24.6959C72.069  25.1759                       
						 72.417 25.4159  72.897  25.4159C74.217  25.4159  75.789  23.6399  77.613  20.0879L77.973  20.4479C77.229  22.4159  76.293  23.9999  75.165  25.1999C74.061  26.3999  72.921  26.9999  71.745  26.9999C70.785                       
						 26.9999 70.077  26.5799  69.621  25.7399C69.165  24.8759  68.937  23.6879  68.937  22.1759C68.937  20.6399  69.141  18.8519  69.549  16.8119C68.013  16.5719  66.237  16.3319  64.221  16.0919C61.869                       
						 20.4119 59.781  24.7319  57.957  29.0519ZM69.801  15.5519C70.305  13.2959  70.953  10.9559  71.745  8.53192C72.537  6.10792  73.329  4.01992  74.121  2.26792C73.041  2.93992  71.709  4.35592  70.125                       
						 6.51592C68.565 8.67592  66.909  11.3159  65.157  14.4359C66.117  14.6279  67.125  14.8679  68.181  15.1559L69.801  15.5519ZM88.5198  26.6399C87.7038  26.6399  87.0798  26.4239  86.6478  25.9919C86.2158  25.5839  85.9998                       
						 25.0319 85.9998  24.3359C85.9998  24.0239  86.0478  23.6639  86.1438  23.2559C86.2638  22.8239  86.3838  22.4039  86.5038  21.9959C86.6478  21.5639  86.7678  21.1079  86.8638  20.6279C86.9838  20.1479  87.0438                       
						 19.7159 87.0438  19.3319C87.0438  18.1559  86.5638  17.5679  85.6038  17.5679C84.6918  17.5679  83.7318  18.0479  82.7238  19.0079C81.7398  19.9679  80.8518  21.0359  80.0598  22.2119C79.2918  23.3879  78.4158                       
						 24.8039 77.4318  26.4599C77.0238  26.4599  76.6518  26.3879  76.3158  26.2439C75.9798  26.1239  75.7158  25.9319  75.5238  25.6679C75.5238  25.5479  75.6798  25.1159  75.9918  24.3719C76.5918  22.8359  77.0838                       
						 21.4439 77.4678  20.1959C77.8518  18.9239  78.0558  17.7959  78.0798  16.8119C78.2478  16.6199  78.4878  16.4519  78.7998  16.3079C79.1118  16.1399  79.4238  16.0559  79.7358  16.0559C80.3838  16.0559  80.7078                       
						 16.3679 80.7078  16.9919C80.7078  17.3519  80.5998  17.9879  80.3838  18.8999C80.1678  19.7879  79.8918  20.7359  79.5558  21.7439C80.7078  19.9679  81.9318  18.4679  83.2278  17.2439C84.5238  16.0199  85.7958                       
						 15.4079 87.0438  15.4079C87.9318  15.4079  88.5918  15.7319  89.0238  16.3799C89.4798  17.0039  89.7078  17.7599  89.7078  18.6479C89.7078  19.1759  89.6358  19.6799  89.4918  20.1599C89.3718  20.6399  89.1798                       
						 21.1919 88.9158  21.8159C88.6998  22.3439  88.5318  22.7999  88.4118  23.1839C88.2918  23.5679  88.2318  23.9519  88.2318  24.3359C88.2318  25.2479  88.5918  25.7039  89.3118  25.7039C90.1278  25.7039  90.9678                       
						 25.1639 91.8318  24.0839C92.7198  23.0039  93.5598  21.6719  94.3518  20.0879L94.7478  20.5559C93.0198  24.6119  90.9438  26.6399  88.5198  26.6399ZM100.573  10.3679C100.141  10.3679  99.7814  10.2719  99.4934  10.0799C99.2294                       
						 9.86392 99.0974  9.56392  99.0974  9.17992C99.0974  8.69992  99.3854  8.26792  99.9614  7.88392C100.537  7.49992  101.125  7.30792  101.725  7.30792C102.517  7.30792  102.913  7.67992  102.913  8.42392C102.913                       
						 8.87992 102.661  9.32392  102.157  9.75592C101.677  10.1639  101.149  10.3679  100.573  10.3679ZM96.2534  26.8559C95.3654  26.8559  94.6814  26.5679  94.2014  25.9919C93.7214  25.4399  93.4814  24.7199  93.4814                       
						 23.8319C93.4814 22.8959  93.7454  21.5999  94.2734  19.9439C94.8254  18.2879  95.4974  16.8359  96.2894  15.5879C97.1054  14.3399  97.8974  13.7159  98.6654  13.7159C98.8814  13.7159  99.0614  13.7879  99.2054                       
						 13.9319C99.3734 14.0759  99.4574  14.2679  99.4574  14.5079C99.4574  14.8439  99.0734  15.6479  98.3054  16.9199C97.5134  18.2399  96.8774  19.4279  96.3974  20.4839C95.9414  21.5159  95.7134  22.4999  95.7134                       
						 23.4359C95.7134 24.2759  95.8454  24.8519  96.1094  25.1639C96.3974  25.4519  96.8534  25.5959  97.4774  25.5959C99.3494  25.5959  101.197  23.7599  103.021  20.0879L103.345  20.4479C102.673  22.4639  101.677  24.0359                       
						 100.357 25.1639C99.0614  26.2919  97.6934  26.8559  96.2534  26.8559ZM120.489  27.0359C119.697  27.0359  119.097  26.7839  118.689  26.2799C118.281  25.7999  118.077  25.1759  118.077  24.4079C118.077  23.7599  118.269                       
						 22.8119 118.653  21.5639C118.773  21.1559  118.881  20.7479  118.977  20.3399C119.097  19.9319  119.157  19.5839  119.157  19.2959C119.157  18.8639  119.049  18.5399  118.833  18.3239C118.641  18.1079  118.401                       
						 17.9999 118.113  17.9999C117.561  17.9999  116.961  18.3959  116.313  19.1879C115.689  19.9559  114.717  21.3479  113.397  23.3639C113.061  23.8919  112.593  24.7799  111.993  26.0279L111.669  26.7119C111.285  26.7119                       
						 110.877 26.6399  110.445  26.4959C110.037  26.3759  109.833  26.2079  109.833  25.9919C109.833  25.8239  110.037  25.1879  110.445  24.0839C110.949  22.5959  111.345  21.3479  111.633  20.3399C111.945  19.3079                       
						 112.101 18.4319  112.101  17.7119C112.101  16.7999  111.801  16.3439  111.201  16.3439C110.529  16.3439  109.653  16.8839  108.573  17.9639C107.517  19.0439  106.473  20.4119  105.441  22.0679C104.409  23.6999                       
						 103.605 25.3079  103.029  26.8919C102.669  26.8919  102.261  26.8079  101.805  26.6399C101.325  26.4719  101.085  26.3039  101.085  26.1359C101.085  26.0639  101.253  25.4999  101.589  24.4439C102.141  22.8359                       
						 102.597 21.3599  102.957  20.0159C103.341  18.6719  103.545  17.5079  103.569  16.5239C103.737  16.3319  103.977  16.1639  104.289  16.0199C104.601  15.8519  104.913  15.7679  105.225  15.7679C105.873  15.7679                       
						 106.197 16.0799  106.197  16.7039C106.197  17.3519  105.885  18.7199  105.261  20.8079C106.437  18.9359  107.697  17.3279  109.041  15.9839C110.409  14.6399  111.681  13.9679  112.857  13.9679C113.553  13.9679                       
						 114.045 14.2199  114.333  14.7239C114.645  15.2279  114.801  15.8879  114.801  16.7039C114.801  17.5199  114.681  18.4079  114.441  19.3679C114.201  20.3279  113.949  21.1319  113.685  21.7799C114.597  20.1239                       
						 115.545 18.7919  116.529  17.7839C117.513  16.7519  118.557  16.2359  119.661  16.2359C120.381  16.2359  120.897  16.4519  121.209  16.8839C121.545  17.3159  121.713  17.8679  121.713  18.5399C121.713  18.9959                       
						 121.653 19.4879  121.533  20.0159C121.413  20.5199  121.233  21.1439  120.993  21.8879C120.585  23.1599  120.381  24.0479  120.381  24.5519C120.381  25.3679  120.741  25.7759  121.461  25.7759C122.349  25.7759                       
						 123.189 25.2359  123.981  24.1559C124.773  23.0519  125.541  21.6959  126.285  20.0879L126.717  20.5919C126.045  22.3679  125.169  23.8919  124.089  25.1639C123.009  26.4119  121.809  27.0359  120.489  27.0359Z  "                     
 						 fill="black"> 
						</path> 
					</mask> 
					<g mask="url(#mask0)"> 
						<path id="Vector 2"  d="M127.406  19.7646C124.996  22.613  120.19  28.2074  120.249  27.7984C120.307  27.3895  120.419             
						 20.4706 120.468  17.0622L114.917  19.2533L111.63  25.6074L113.676  13.4835L102.282  25.0961L105.934  14.8711C103.085  18.9611  97.3009  27.1265  96.9503  27.068C96.5121  26.995  94.4672  22.7589  94.6133  22.2477C94.7301  21.8387  97.2912                       
						 16.2831 98.5571  13.5565C96.5121  17.5491  92.3637  25.4905  92.13  25.3152C91.8379  25.0961  86.2872  29.8434  86.7254  25.5343C87.1637  21.2252  88.5513  13.4104  88.4053  14.0677C88.2592  14.725  88.6244                       
						 19.6914 89.0626  19.4723C89.4132  19.2971  87.115  16.7213  85.9221  15.4554C82.9763  18.9611  77.0848  25.8995  77.0848  25.6073C77.0848  25.2421  80.8826  14.579  80.3713  16.1127C79.9623  17.3397  74.2607                       
						 24.4631 71.461  27.8714L74.8206  0.190964L56.9269  26.6297L72.6296  15.3823L56.9269  13.7755L35.7466  30.3545C34.2616  31.5475  31.4667  33.9625  32.1678  34.0794C33.0443  34.2254  35.1623  35.9052  35.6005  35.6131C36.0387  35.321  41.5894                       
						 29.9163 41.9546  29.186C42.2468  28.6017  43.7805  20.2756  44.5109  16.1857C41.5651  19.2288  35.6005  25.3297  35.3084  25.3881C34.9432  25.4612  33.0443  18.5958  34.3589  17.8655C35.6736  17.1351  42.6119                       
						 12.0957 43.0501  11.9496C43.4884  11.8035  45.9716  15.9665  46.0446  15.6014C46.103  15.3092  35.5518  20.2513  30.2689  22.7589C30.5611  19.3262  31.1016  12.5193  30.9263  12.753C30.7072  13.0451  22.4542                       
						 27.4331 22.3812  27.0679C22.3227  26.7758  20.2631  19.3505  19.2406  15.6744L15.8079  37.0738C11.7179  38.924  3.15813  42.3032  1.63899  41.0177C-0.259934  39.4109  -8.43988  27.9444  -8.22078  26.3376C-8.00167  24.7308                       
						 -5.88371 14.5789  -4.423  15.0171C-3.25444  15.3677  1.46853  16.3804  3.68394  16.843C3.41614  17.7681  2.70526  20.0273  2.00412  21.6633C1.12769  23.7083  -0.77123  22.8319  1.20073  25.169C2.7783  27.0387                       
						 6.09411 28.6747  7.55482  29.259C9.47809  27.9444  13.4123  25.2859  13.7628  25.169C14.1134  25.0522  14.9314  21.6146  15.2966  19.9105L7.40875  14.1407C6.16714  11.5357  3.90304  6.09215  4.77947  5.15729C5.6559                       
						 4.22244 8.65035  1.21337  10.038  -0.1743C11.8883  -0.490797  15.691  -1.07997  16.1  -0.904684C16.6112  -0.685577  19.4596  4.06163  18.8753  4.93806C18.4079  5.6392  16.3434  8.78459  15.3696  10.2696L68.5828                       
						 -5.73047L93.8208 5.19353L101.478  8.91184L104.395  8.44685L101.817  7.05188C100.196  7.71414  97.0315  9.22465  97.3358  9.96864C97.7163  10.8986  99.2803  12.1245  99.8721  11.8709C100.346  11.668  101.197  10.5464  101.563  10.0109  "                     
 						 stroke="#8BFFF1"  strokeWidth="8"  strokeLinecap="round"  strokeLinejoin="round"> 
						</path> 
					</g> 
				</g> 
			</svg> 
    </MaskGroupComponent>
    )
};



const MaskGroupComponent = styled(MaskGroupSvg)`

&& {
  height: ${ props => props.height ? props.height : "100%" };
  width: ${ props => props.width ? props.width : "100%" };

  .dash-array {
    fill: transparent;
    animation: dash 5s linear infinite reverse;
    stroke-dasharray: ${ props => props.length + ", " + props.length };
    }
    
    @keyframes dash {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: -${ props => props.length };
    }
  }
}


`;