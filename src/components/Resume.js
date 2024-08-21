import './ResumeStyle.css';

export default function Resume () {
    const config = {
        link: 'https://drive.google.com/file/d/1Q_dGJcwMMmyn0qK_9a8cSs-B91FTnD24/view?usp=drivesdk'
    }

    return (<section id='resume' >
        
        <div className='resume-container '>
            <div className='res'>
                <h1 className='res-h1'>Resume</h1>
                <p className='pb-5'>You can view my resume <a className='btn' href={config.link} download> Download</a></p>
            </div>
        </div>
    </section>
    );
}