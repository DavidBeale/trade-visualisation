
'use strict';


module.exports = class MainViewPM
{
	constructor()
	{
		this.trades = [
			{
			  "stock": "ABC",
			  "sym": "ABC.VX",
			  "exchange": "XVTX",
			  "price": 137.21,
			  "change": 0,
			  "time": "2015-02-04T08:00:00.000Z",
			  "buyAccount": "ACCT1",
			  "sellAccount": "ACCT2",
			  "volume": 1064
			},
			{
			  "stock": "PLM",
			  "sym": "PLM.VX",
			  "exchange": "XVTX",
			  "price": 84.37,
			  "change": 0,
			  "time": "2015-02-04T08:00:59.224Z",
			  "buyAccount": "ACCT2",
			  "sellAccount": "ACCT3",
			  "volume": 4875
			},
			{
			  "stock": "GOG",
			  "sym": "GOG.L",
			  "exchange": "LSE",
			  "price": 265.77,
			  "change": 0,
			  "time": "2015-02-04T08:01:40.055Z",
			  "buyAccount": "ACCT8",
			  "sellAccount": "ACCT6",
			  "volume": 1699
			},
			{
			  "stock": "PLM",
			  "sym": "PLM.CHI",
			  "exchange": "CHIX",
			  "price": 84.34,
			  "change": 0,
			  "time": "2015-02-04T08:01:41.113Z",
			  "buyAccount": "ACCT10",
			  "sellAccount": "ACCT3",
			  "volume": 4116
			},
			{
			  "stock": "ABC",
			  "sym": "ABC.CHI",
			  "exchange": "CHIX",
			  "price": 137.22,
			  "change": 0,
			  "time": "2015-02-04T08:01:50.621Z",
			  "buyAccount": "ACCT1",
			  "sellAccount": "ACCT8",
			  "volume": 4304
			},
			{
			  "stock": "GOG",
			  "sym": "GOG.CHI",
			  "exchange": "CHIX",
			  "price": 265.77,
			  "change": 0,
			  "time": "2015-02-04T08:02:13.634Z",
			  "buyAccount": "ACCT1",
			  "sellAccount": "ACCT4",
			  "volume": 7893
			},
			{
			  "stock": "PLM",
			  "sym": "PLM.L",
			  "exchange": "LSE",
			  "price": 84.32,
			  "change": 0,
			  "time": "2015-02-04T08:03:06.782Z",
			  "buyAccount": "ACCT4",
			  "sellAccount": "ACCT8",
			  "volume": 2627
			},
			{
			  "stock": "PLM",
			  "sym": "PLM.L",
			  "exchange": "LSE",
			  "price": 84.31,
			  "change": -0.01,
			  "time": "2015-02-04T08:03:49.290Z",
			  "buyAccount": "ACCT6",
			  "sellAccount": "ACCT3",
			  "volume": 1869
			},
			{
			  "stock": "PLM",
			  "sym": "PLM.CHI",
			  "exchange": "CHIX",
			  "price": 84.34,
			  "change": 0,
			  "time": "2015-02-04T08:04:03.247Z",
			  "buyAccount": "ACCT1",
			  "sellAccount": "ACCT7",
			  "volume": 6527
			},
			{
			  "stock": "PLM",
			  "sym": "PLM.CHI",
			  "exchange": "CHIX",
			  "price": 84.35,
			  "change": 0.01,
			  "time": "2015-02-04T08:04:48.950Z",
			  "buyAccount": "ACCT1",
			  "sellAccount": "ACCT6",
			  "volume": 1572
			},
			{
			  "stock": "ABC",
			  "sym": "ABC.VX",
			  "exchange": "XVTX",
			  "price": 137.23,
			  "change": 0.02,
			  "time": "2015-02-04T08:05:44.555Z",
			  "buyAccount": "ACCT7",
			  "sellAccount": "ACCT4",
			  "volume": 9519
			},
			{
			  "stock": "PLM",
			  "sym": "PLM.VX",
			  "exchange": "XVTX",
			  "price": 84.32,
			  "change": -0.05,
			  "time": "2015-02-04T08:05:49.602Z",
			  "buyAccount": "ACCT4",
			  "sellAccount": "ACCT1",
			  "volume": 8268
			},
			{
			  "stock": "PLM",
			  "sym": "PLM.CHI",
			  "exchange": "CHIX",
			  "price": 84.34,
			  "change": -0.01,
			  "time": "2015-02-04T08:06:48.283Z",
			  "buyAccount": "ACCT10",
			  "sellAccount": "ACCT2",
			  "volume": 6999
			},
			{
			  "stock": "PLM",
			  "sym": "PLM.CHI",
			  "exchange": "CHIX",
			  "price": 84.33,
			  "change": -0.01,
			  "time": "2015-02-04T08:07:30.514Z",
			  "buyAccount": "ACCT4",
			  "sellAccount": "ACCT10",
			  "volume": 9143
			},
			{
			  "stock": "ABC",
			  "sym": "ABC.CHI",
			  "exchange": "CHIX",
			  "price": 137.24,
			  "change": 0.02,
			  "time": "2015-02-04T08:07:55.276Z",
			  "buyAccount": "ACCT3",
			  "sellAccount": "ACCT6",
			  "volume": 6500
			},
			{
			  "stock": "PLM",
			  "sym": "PLM.L",
			  "exchange": "LSE",
			  "price": 84.36,
			  "change": 0.05,
			  "time": "2015-02-04T08:08:18.011Z",
			  "buyAccount": "ACCT10",
			  "sellAccount": "ACCT1",
			  "volume": 7418
			},
			{
			  "stock": "PLM",
			  "sym": "PLM.CHI",
			  "exchange": "CHIX",
			  "price": 84.34,
			  "change": 0.01,
			  "time": "2015-02-04T08:09:04.620Z",
			  "buyAccount": "ACCT4",
			  "sellAccount": "ACCT10",
			  "volume": 8507
			},
			{
			  "stock": "ABC",
			  "sym": "ABC.CHI",
			  "exchange": "CHIX",
			  "price": 137.21,
			  "change": -0.03,
			  "time": "2015-02-04T08:09:47.016Z",
			  "buyAccount": "ACCT9",
			  "sellAccount": "ACCT10",
			  "volume": 6569
			},
			{
			  "stock": "ABC",
			  "sym": "ABC.VX",
			  "exchange": "XVTX",
			  "price": 137.17,
			  "change": -0.06,
			  "time": "2015-02-04T08:10:14.727Z",
			  "buyAccount": "ACCT10",
			  "sellAccount": "ACCT9",
			  "volume": 4055
			}];
	}
};