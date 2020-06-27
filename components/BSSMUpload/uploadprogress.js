export default function UploadProgress({progress}){
	return(
		<>
		<div className="parent">
			<div className="line">{progress}</div>
		</div>
		<style jsx>
		{`
			.parent{
				width:100%;
				height:8px;
				display:block;
				overflow:hidden;
				position:relative;
				border-radius:5px;	
				background-color:#000;
				margin:10px 0;
			}
			.line{
				position:absolute;
				top:0;
				bottom:100%;
				background-color:red;
				color:red;
				width:${progress}%;
				display:block;
				height:10px;
			}
		`}
		</style>
		</>
		);
}